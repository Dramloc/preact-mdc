import { FormField } from '../../../../src/form-field';
import { h } from 'preact';
import { Radio } from '../../../../src/radio';

import '@material/form-field/mdc-form-field.scss';
import '@material/radio/mdc-radio.scss';

import Showcase from '../../components/showcase';

import style from './style.scss';

function RadioHero() {
	return (
		<Showcase.Demo>
			<Radio className={style['demo-radio']} checked name="hero-radio-set" />
			<Radio className={style['demo-radio']} name="hero-radio-set" />
		</Showcase.Demo>
	);
}

function RadioDemos() {
	return (
		<Showcase.Section>
			<Showcase.Section.Title>Radio Buttons</Showcase.Section.Title>
			<Showcase.Demo>
				<FormField element="label" className={style['demo-radio-form-field']}>
					<Radio id="radio-1" checked name="demo-radio-set" />
					<label for="radio-1">Radio 1</label>
				</FormField>
				<FormField element="label" className={style['demo-radio-form-field']}>
					<Radio id="radio-2" name="demo-radio-set" />
					<label for="radio-2">Radio 2</label>
				</FormField>
			</Showcase.Demo>
		</Showcase.Section>
	);
}

export default function RadioShowcase() {
	return (
		<Showcase
			title="Radio Button"
			description="Buttons communicate an action a user can take. They are typically placed throughout your UI, in places like dialogs, forms, cards, and toolbars."
			hero={<RadioHero />}
			guidelinesLink="https://material.io/design/components/selection-controls.html#radio-buttons"
			documentationLink="https://material.io/develop/web/components/input-controls/radio-buttons/"
			sourceCodeLink="https://github.com/material-components/material-components-web/tree/master/packages/mdc-radio"
			demoLink="https://material-components.github.io/material-components-web-catalog/#/component/radio"
			demos={<RadioDemos />}
		/>
	);
}
