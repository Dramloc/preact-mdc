import { Checkbox } from '@preact/mdc/checkbox';
import { h } from 'preact';

import '@material/checkbox/mdc-checkbox.scss';

import Showcase from '../../components/showcase';

import style from './style.scss';

function CheckboxHero() {
	return (
		<Showcase.Demo>
			<Checkbox className={style['demo-checkbox']} checked />
			<Checkbox className={style['demo-checkbox']} />
		</Showcase.Demo>
	);
}

function CheckboxDemos() {
	return (
		<div>
			<Showcase.Section>
				<Showcase.Section.Title>Unchecked</Showcase.Section.Title>
				<Showcase.Demo>
					<Checkbox className={style['demo-checkbox']} />
				</Showcase.Demo>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Indeterminate</Showcase.Section.Title>
				<Showcase.Demo>
					<Checkbox className={style['demo-checkbox']} indeterminate />
				</Showcase.Demo>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Checked</Showcase.Section.Title>
				<Showcase.Demo>
					<Checkbox className={style['demo-checkbox']} checked />
				</Showcase.Demo>
			</Showcase.Section>
		</div>
	);
}

export default function CheckboxShowcase() {
	return (
		<Showcase
			title="Checkbox"
			description="Checkboxes allow the user to select multiple options from a set."
			hero={<CheckboxHero />}
			guidelinesLink="https://material.io/design/components/selection-controls.html#checkboxes"
			documentationLink="https://material.io/develop/web/components/input-controls/checkboxes/"
			sourceCodeLink="https://github.com/material-components/material-components-web/tree/master/packages/mdc-checkbox"
			demoLink="https://material-components.github.io/material-components-web-catalog/#/component/checkbox"
			demos={<CheckboxDemos />}
		/>
	);
}
