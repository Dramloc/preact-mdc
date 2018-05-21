import { h } from 'preact';
import Showcase from '../../components/showcase';

function ElevationHero() {
	return null;
}

function ElevationDemos() {
	return null;
}

export default function ElevationShowcase() {
	return (
		<Showcase
			title="Elevation"
			description="Elevation is the relative depth, or distance, between two surfaces along the z-axis."
			hero={<ElevationHero />}
			guidelinesLink="https://material.io/design/components/elevation.html"
			documentationLink="https://material.io/components/web/catalog/elevation/"
			sourceCodeLink="https://github.com/material-components/material-components-web/tree/master/packages/mdc-elevation"
			demoLink="https://material-components.github.io/material-components-web-catalog/#/component/elevation"
			demos={<ElevationDemos />}
		/>
	);
}
