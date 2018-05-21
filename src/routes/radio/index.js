import { h } from 'preact';
import Showcase from '../../components/showcase';

function RadioHero() {
	return null;
}

function RadioDemos() {
	return null;
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
