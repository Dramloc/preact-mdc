import { h } from 'preact';

import '@material/checkbox/mdc-checkbox.scss';

import { Checkbox } from '../../components/mdc-checkbox';
import Showcase from '../../components/showcase';

import style from './style.scss';

function CheckboxHero() {
	return (
		<div>
			<Checkbox className={style['demo-checkbox']} checked />
			<Checkbox className={style['demo-checkbox']} />
		</div>
	);
}

function CheckboxDemos() {
	return (
		<div>
			<Showcase.Section>
				<Showcase.Section.Title>Unchecked</Showcase.Section.Title>
				<Checkbox className={style['demo-checkbox']} />
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Indeterminate</Showcase.Section.Title>
				<Checkbox className={style['demo-checkbox']} indeterminate />
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Checked</Showcase.Section.Title>
				<Checkbox className={style['demo-checkbox']} checked />
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
