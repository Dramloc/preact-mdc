import { h } from 'preact';
import { Select } from '@preact/mdc/select';

import '@material/select/mdc-select.scss';

import Showcase from '../../components/showcase';

import style from './style.scss';

function SelectHero() {
	return (
		<div>
			<Select className={style['demo-select']} label="Fruit" value="">
				<option value="" disabled />
				<option value="apple">Apple</option>
				<option value="orange">Orange</option>
				<option value="banana">Banana</option>
			</Select>
		</div>
	);
}

function SelectDemos() {
	return (
		<Showcase.Section>
			<Showcase.Section.Title>Box Select</Showcase.Section.Title>
			<Select className={style['demo-select']} modifiers={{ box: true }} label="Fruit" value="">
				<option value="" disabled />
				<option value="apple">Apple</option>
				<option value="orange">Orange</option>
				<option value="banana">Banana</option>
			</Select>
		</Showcase.Section>
	);
}

export default function SelectShowcase() {
	return (
		<Showcase
			title="Select"
			description="Selects allow users to select from a single-option menu. It functions as a wrapper around the browser's native <select> element."
			hero={<SelectHero />}
			guidelinesLink="https://material.io/design/components/text-fields.html"
			documentationLink="https://material.io/develop/web/components/input-controls/select-menus/"
			sourceCodeLink="https://github.com/material-components/material-components-web/tree/master/packages/mdc-select"
			demoLink="https://material-components.github.io/material-components-web-catalog/#/component/select"
			demos={<SelectDemos />}
		/>
	);
}
