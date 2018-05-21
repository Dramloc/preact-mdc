import { h } from 'preact';
import Showcase from '../../components/showcase';

function ShapeHero() {
	return null;
}

function ShapeDemos() {
	return null;
}

export default function ShapeShowcase() {
	return (
		<Showcase
			title="Shape"
			description="Shapes direct attention, identify components, communicate state, and express brand."
			hero={<ShapeHero />}
			guidelinesLink="https://material.io/design/shape/about-shape.html#shaping-material"
			documentationLink="https://material.io/develop/web/components/shape/"
			sourceCodeLink="https://github.com/material-components/material-components-web/tree/master/packages/mdc-shape"
			demoLink="https://material-components.github.io/material-components-web-catalog/#/component/shape"
			demos={<ShapeDemos />}
		/>
	);
}
