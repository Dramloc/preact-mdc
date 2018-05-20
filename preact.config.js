import { existsSync } from 'fs';
import { readJson } from 'preact-cli/lib/lib/webpack/webpack-base-config';
import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import prerender from 'preact-cli/lib/lib/webpack/prerender';

function renderHTMLPlugin(config) {
	const { cwd, dest, isProd, src } = config;

	const htmlWebpackConfig = values => {
		let { url, title } = values;
		let ssr;

		function render({ url }) {
			if (ssr) {
				return ssr;
			}
			const body = prerender({ cwd, dest, src }, { url });
			const entry = resolve(dest, './ssr-build/ssr-bundle.js');
			const m = require(entry);
			const head = m.rewind();
			ssr = { head, body };
			return ssr;
		}

		return Object.assign(values, {
			filename: resolve(dest, url.substring(1), 'index.html'),
			template: `!!ejs-loader!${config.template ||
				resolve(__dirname, '../../resources/template.html')}`,
			minify: isProd && {
				collapseWhitespace: true,
				removeScriptTypeAttributes: true,
				removeRedundantAttributes: true,
				removeStyleLinkTypeAttributes: true,
				removeComments: true
			},
			favicon: existsSync(resolve(src, 'assets/favicon.ico'))
				? 'assets/favicon.ico'
				: resolve(__dirname, '../../resources/favicon.ico'),
			manifest: config.manifest,
			inject: true,
			compile: true,
			preload: config.preload === true,
			excludeAssets: [/(bundle|polyfills)(\..*)?\.js$/],
			config,
			body(params) {
				if (!config.prerender) {
					return '';
				}
				return render({ url }).body;
			},
			title(params) {
				if (!config.prerender) {
					return `<title>${title ||
						config.title ||
						config.manifest.name ||
						config.manifest.short_name ||
						(config.pkg.name || '').replace(/^@[a-z]\//, '') ||
						'Preact App'}</title>`;
				}
				return render({ url }).head.title.toString();
			},
			link(params) {
				if (!config.prerender) {
					return '';
				}
				return render({ url }).head.link.toString();
			},
			meta(params) {
				if (!config.prerender) {
					return '';
				}
				return render({ url }).head.meta.toString();
			}
		});
	};

	const pages = readJson(resolve(cwd, config.prerenderUrls || '')) || [
		{ url: '/' }
	];

	return pages.map(htmlWebpackConfig).map(conf => new HtmlWebpackPlugin(conf));
}

function replacePlugins(name, replacements) {
	let index = 0;
	return plugin => {
		if (plugin && plugin.constructor && plugin.constructor.name === name) {
			return replacements[index++];
		}
		return plugin;
	};
}

export default (config, env, helpers) => {
	const plugins = renderHTMLPlugin(env);
	config.plugins = config.plugins.map(
		replacePlugins('HtmlWebpackPlugin', plugins)
	);
};
