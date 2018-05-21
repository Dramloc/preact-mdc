import { h } from 'preact';
import Showcase from '../../components/showcase';

function CheckboxHero() {
	return null;
}

function CheckboxDemos() {
	return null;
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
