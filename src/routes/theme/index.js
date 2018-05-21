import { h } from 'preact';
import Showcase from '../../components/showcase';

function ThemeHero() {
	return null;
}

function ThemeDemos() {
	return null;
}

export default function ThemeShowcase() {
	return (
		<Showcase
			title="Theme"
			description="Color in Material Design is inspired by bold hues juxtaposed with muted environments, deep shadows, and bright highlights."
			hero={<ThemeHero />}
			guidelinesLink="https://material.io/design/color/applying-color-to-ui.html"
			documentationLink="https://material.io/develop/web/components/theme/"
			sourceCodeLink="https://github.com/material-components/material-components-web/tree/master/packages/mdc-theme"
			demoLink="https://material-components.github.io/material-components-web-catalog/#/component/theme"
			demos={<ThemeDemos />}
		/>
	);
}
