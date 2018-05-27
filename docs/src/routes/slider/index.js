import { h } from 'preact';
import { Slider } from '@preact/mdc/slider';

import '@material/slider/mdc-slider.scss';

import Showcase from '../../components/showcase';

function SliderHero() {
	return (
		<Showcase.Demo>
			<Slider min={0} max={100} value={50} aria-label="Select Value" />
		</Showcase.Demo>
	);
}

function SliderDemos() {
	return (
		<div>
			<Showcase.Section>
				<Showcase.Section.Title>Continuous</Showcase.Section.Title>
				<Showcase.Demo>
					<Slider min={0} max={50} value={25} aria-label="Select Value" />
				</Showcase.Demo>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Discrete</Showcase.Section.Title>
				<Showcase.Demo>
					<Slider
						modifiers={{ discrete: true }}
						min={0}
						max={50}
						value={25}
						aria-label="Select Value"
					/>
				</Showcase.Demo>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Custom Step</Showcase.Section.Title>
				<Showcase.Demo>
					<Slider
						modifiers={{ discrete: true }}
						min={0}
						max={50}
						value={25}
						step={5}
						aria-label="Select Value"
					/>
				</Showcase.Demo>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Discrete with Tick Marks</Showcase.Section.Title>
				<Showcase.Demo>
					<Slider
						modifiers={{ discrete: true, 'display-markers': true }}
						min={0}
						max={50}
						value={25}
						aria-label="Select Value"
					/>
				</Showcase.Demo>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Disabled</Showcase.Section.Title>
				<Showcase.Demo>
					<Slider min={0} max={50} value={25} disabled aria-label="Select Value" />
				</Showcase.Demo>
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
