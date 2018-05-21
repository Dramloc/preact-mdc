import { h } from 'preact';

import '@material/slider/mdc-slider.scss';

import { Slider } from '../../components/mdc-slider';
import Showcase from '../../components/showcase';

function SliderHero() {
	return (
		<Slider aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" aria-label="Select Value" />
	);
}

function SliderDemos() {
	return (
		<div>
			<Showcase.Section>
				<Showcase.Section.Title>Continuous</Showcase.Section.Title>
				<Slider aria-valuemin="0" aria-valuemax="50" aria-valuenow="25" aria-label="Select Value" />
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Discrete</Showcase.Section.Title>
				<Slider
					modifiers={{ discrete: true }}
					aria-valuemin="0"
					aria-valuemax="50"
					aria-valuenow="25"
					aria-label="Select Value"
				/>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Discrete with Tick Marks</Showcase.Section.Title>
				<Slider
					modifiers={{ discrete: true, 'display-markers': true }}
					aria-valuemin="0"
					aria-valuemax="50"
					aria-valuenow="25"
					aria-label="Select Value"
				/>
			</Showcase.Section>
		</div>
	);
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
