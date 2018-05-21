import { h } from 'preact';
import Showcase from '../../components/showcase';

function TypographyHero() {
	return null;
}

function TypographyDemos() {
	return null;
}

export default function TypographyShowcase() {
	return (
		<Showcase
			title="Typography"
			description="Roboto is the standard typeface on Android and Chrome"
			hero={<TypographyHero />}
			guidelinesLink="https://material.io/design/typography/the-type-system.html#type-scale"
			documentationLink="https://material.io/develop/web/components/typography/"
			sourceCodeLink="https://github.com/material-components/material-components-web/tree/master/packages/mdc-typography"
			demoLink="https://material-components.github.io/material-components-web-catalog/#/component/typography"
			demos={<TypographyDemos />}
		/>
	);
}
