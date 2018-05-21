import { h } from 'preact';
import Showcase from '../../components/showcase';

function TextFieldHero() {
	return null;
}

function TextFieldDemos() {
	return null;
}

export default function TextFieldShowcase() {
	return (
		<Showcase
			title="Text Field"
			description="Text fields allow users to input, edit, and select text. Text fields typically reside in forms but can appear in other places, like dialog boxes and search."
			hero={<TextFieldHero />}
			guidelinesLink="https://material.io/design/components/text-fields.html"
			documentationLink="https://material.io/develop/web/components/input-controls/text-field/"
			sourceCodeLink="https://github.com/material-components/material-components-web/tree/master/packages/mdc-textfield"
			demoLink="https://material-components.github.io/material-components-web-catalog/#/component/text-field"
			demos={<TextFieldDemos />}
		/>
	);
}
