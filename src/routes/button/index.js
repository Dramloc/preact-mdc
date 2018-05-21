import { h } from 'preact';

import '@material/button/mdc-button.scss';
import '@material/ripple/mdc-ripple.scss';

import { Button, ButtonIcon } from '../../components/mdc-button';
import Showcase from '../../components/showcase';

import style from './style.scss';

function ButtonHero() {
	return (
		<div>
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
		</div>
	);
}

function ButtonDemos() {
	return (
		<div>
			<Showcase.Section>
				<Showcase.Section.Title>Text Button</Showcase.Section.Title>
				<Button className={style['demo-button']}>Default</Button>
				<Button className={style['demo-button']} modifiers={{ dense: true }}>
					Dense
				</Button>
				<Button className={style['demo-button']}>
					<ButtonIcon>favorite</ButtonIcon>Icon
				</Button>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Raised Button</Showcase.Section.Title>
				<Button className={style['demo-button']} modifiers={{ raised: true }}>
					Default
				</Button>
				<Button className={style['demo-button']} modifiers={{ raised: true, dense: true }}>
					Dense
				</Button>
				<Button className={style['demo-button']} modifiers={{ raised: true }}>
					<ButtonIcon>favorite</ButtonIcon>Icon
				</Button>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Raised Button</Showcase.Section.Title>
				<Button className={style['demo-button']} modifiers={{ unelevated: true }}>
					Default
				</Button>
				<Button className={style['demo-button']} modifiers={{ unelevated: true, dense: true }}>
					Dense
				</Button>
				<Button className={style['demo-button']} modifiers={{ unelevated: true }}>
					<ButtonIcon>favorite</ButtonIcon>Icon
				</Button>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Outlined Button</Showcase.Section.Title>
				<Button className={style['demo-button']} modifiers={{ outlined: true }}>
					Default
				</Button>
				<Button className={style['demo-button']} modifiers={{ outlined: true, dense: true }}>
					Dense
				</Button>
				<Button className={style['demo-button']} modifiers={{ outlined: true }}>
					<ButtonIcon>favorite</ButtonIcon>Icon
				</Button>
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
