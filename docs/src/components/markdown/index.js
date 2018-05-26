import { h } from 'preact';
import highlightjs from 'highlight.js';
import marked from 'marked';
import Markup from 'preact-markup';

import 'highlight.js/styles/github.css';

import style from './style.scss';

const materialRenderer = new marked.Renderer();

materialRenderer.heading = (text, level) => {
	const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
	const headline = level + 2;
	return `<h${level} class="mdc-typography--headline${headline}" id="${escapedText}">${text}</h${level}>`;
};

materialRenderer.paragraph = text => `<p class="mdc-typography--body1">${text}</p>`;

export default ({ content, ...props }) => {
	const markup = marked(content, {
		langPrefix: 'hljs ',
		highlight(code) {
			return highlightjs.highlightAuto(code).value;
		},
		renderer: materialRenderer
	});
	return <Markup className={style.markdown} markup={markup} type="html" trim={false} {...props} />;
};
