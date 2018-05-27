import { Button, ButtonIcon } from '../../../../src/button';
import { h } from 'preact';

import '@material/button/mdc-button.scss';

import Showcase from '../../components/showcase';

import style from './style.scss';

function ButtonHero() {
	return (
		<Showcase.Demo>
			<Button className={style['hero-button']}>Text</Button>
			<Button className={style['hero-button']} modifiers={{ raised: true }}>
				Raised
			</Button>
			<Button className={style['hero-button']} modifiers={{ unelevated: true }}>
				Unelevated
			</Button>
			<Button className={style['hero-button']} modifiers={{ outlined: true }}>
				Outlined
			</Button>
		</Showcase.Demo>
	);
}

function ButtonDemo({ modifiers = {}, ...props }) {
	return (
		<Showcase.Demo>
			<Button className={style['demo-button']} modifiers={modifiers} {...props}>
				Default
			</Button>
			<Button className={style['demo-button']} modifiers={{ ...modifiers, dense: true }} {...props}>
				Dense
			</Button>
			<Button className={style['demo-button']} modifiers={modifiers} {...props}>
				<ButtonIcon>favorite</ButtonIcon>Icon
			</Button>
		</Showcase.Demo>
	);
}

function ButtonDemos() {
	return (
		<div>
			<Showcase.Section>
				<Showcase.Section.Title>Text Button</Showcase.Section.Title>
				<ButtonDemo />
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Raised Button</Showcase.Section.Title>
				<ButtonDemo modifiers={{ raised: true }} />
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Raised Button</Showcase.Section.Title>
				<ButtonDemo modifiers={{ unelevated: true }} />
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Outlined Button</Showcase.Section.Title>
				<ButtonDemo modifiers={{ outlined: true }} />
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Disabled Button</Showcase.Section.Title>
				<ButtonDemo disabled />
			</Showcase.Section>
		</div>
	);
}

export default function ButtonShowcase() {
	return (
		<Showcase
			title="Button"
			description="Buttons communicate an action a user can take. They are typically placed throughout your UI, in places like dialogs, forms, cards, and toolbars."
			hero={<ButtonHero />}
			guidelinesLink="https://material.io/design/components/buttons.html"
			documentationLink="https://material.io/components/web/catalog/buttons/"
			sourceCodeLink="https://github.com/material-components/material-components-web/tree/master/packages/mdc-button"
			demoLink="https://material-components.github.io/material-components-web-catalog/#/component/button"
			demos={<ButtonDemos />}
		/>
	);
}
