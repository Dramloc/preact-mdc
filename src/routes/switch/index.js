import { h } from 'preact';
import Showcase from '../../components/showcase';

function SwitchHero() {
	return null;
}

function SwitchDemos() {
	return null;
}

export default function SwitchShowcase() {
	return (
		<Showcase
			title="Switch"
			description="Switches communicate an action a user can take. They are typically placed throughout your UI, in places like dialogs, forms, cards, and toolbars."
			hero={<SwitchHero />}
			guidelinesLink="https://material.io/design/components/selection-controls.html#switches"
			documentationLink="https://material.io/develop/web/components/input-controls/switches/"
			sourceCodeLink="https://github.com/material-components/material-components-web/tree/master/packages/mdc-switch"
			demoLink="https://material-components.github.io/material-components-web-catalog/#/component/switch"
			demos={<SwitchDemos />}
		/>
	);
}
