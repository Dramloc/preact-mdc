import { h } from 'preact';
import { Switch } from '@preact/mdc/switch';

import '@material/switch/mdc-switch.scss';

import Showcase from '../../components/showcase';

import style from './style.scss';

function SwitchHero() {
	return (
		<Showcase.Demo>
			<Switch id="hero-switch" />
			<label className={style['hero-switch-label']} for="hero-switch">
				off/on
			</label>
		</Showcase.Demo>
	);
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
		/>
	);
}
