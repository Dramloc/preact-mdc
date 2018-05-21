import { h } from 'preact';

import '@material/button/mdc-button.scss';
import '@material/ripple/mdc-ripple.scss';

import { Button, ButtonIcon } from '../../components/mdc-button';
import { withRipple } from '../../components/mdc-ripple';
import Showcase from '../../components/showcase';

import style from './style.scss';

const RippledButton = withRipple(Button);

function ButtonHero() {
	return (
		<div>
			<RippledButton className={style['hero-button']}>Text</RippledButton>
			<RippledButton className={style['hero-button']} modifiers={{ raised: true }}>
				Raised
			</RippledButton>
			<RippledButton className={style['hero-button']} modifiers={{ unelevated: true }}>
				Unelevated
			</RippledButton>
			<RippledButton className={style['hero-button']} modifiers={{ outlined: true }}>
				Outlined
			</RippledButton>
		</div>
	);
}

function ButtonDemos() {
	return (
		<div>
			<Showcase.Section>
				<Showcase.Section.Title>Text Button</Showcase.Section.Title>
				<RippledButton className={style['demo-button']}>Default</RippledButton>
				<RippledButton className={style['demo-button']} modifiers={{ dense: true }}>
					Dense
				</RippledButton>
				<RippledButton className={style['demo-button']}>
					<ButtonIcon>favorite</ButtonIcon>Icon
				</RippledButton>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Raised Button</Showcase.Section.Title>
				<RippledButton className={style['demo-button']} modifiers={{ raised: true }}>
					Default
				</RippledButton>
				<RippledButton className={style['demo-button']} modifiers={{ raised: true, dense: true }}>
					Dense
				</RippledButton>
				<RippledButton className={style['demo-button']} modifiers={{ raised: true }}>
					<ButtonIcon>favorite</ButtonIcon>Icon
				</RippledButton>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Raised Button</Showcase.Section.Title>
				<RippledButton className={style['demo-button']} modifiers={{ unelevated: true }}>
					Default
				</RippledButton>
				<RippledButton
					className={style['demo-button']}
					modifiers={{ unelevated: true, dense: true }}
				>
					Dense
				</RippledButton>
				<RippledButton className={style['demo-button']} modifiers={{ unelevated: true }}>
					<ButtonIcon>favorite</ButtonIcon>Icon
				</RippledButton>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Outlined Button</Showcase.Section.Title>
				<RippledButton className={style['demo-button']} modifiers={{ outlined: true }}>
					Default
				</RippledButton>
				<RippledButton className={style['demo-button']} modifiers={{ outlined: true, dense: true }}>
					Dense
				</RippledButton>
				<RippledButton className={style['demo-button']} modifiers={{ outlined: true }}>
					<ButtonIcon>favorite</ButtonIcon>Icon
				</RippledButton>
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
