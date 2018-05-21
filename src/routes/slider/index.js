import { h } from 'preact';
import Showcase from '../../components/showcase';

function SliderHero() {
	return null;
}

function SliderDemos() {
	return null;
}

export default function SliderShowcase() {
	return (
		<Showcase
			title="Slider"
			description="Sliders let users select from a range of values by moving the slider thumb."
			hero={<SliderHero />}
			guidelinesLink="https://material.io/design/components/sliders.html"
			documentationLink="https://material.io/develop/web/components/input-controls/sliders/"
			sourceCodeLink="https://github.com/material-components/material-components-web/tree/master/packages/mdc-slider"
			demoLink="https://material-components.github.io/material-components-web-catalog/#/component/slider"
			demos={<SliderDemos />}
		/>
	);
}
