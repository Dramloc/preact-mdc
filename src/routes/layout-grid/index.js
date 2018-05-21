import { h } from 'preact';
import Showcase from '../../components/showcase';

function LayoutGridHero() {
	return null;
}

function LayoutGridDemos() {
	return null;
}

export default function LayoutGridShowcase() {
	return (
		<Showcase
			title="Layout Grid"
			description="Material design’s responsive UI is based on a 12-column grid layout."
			hero={<LayoutGridHero />}
			documentationLink="https://material.io/components/web/catalog/layout-grid/"
			sourceCodeLink="https://github.com/material-components/material-components-web/tree/master/packages/mdc-layout-grid"
			demoLink="https://material-components.github.io/material-components-web-catalog/#/component/layout-grid"
			demos={<LayoutGridDemos />}
		/>
	);
}
