import { h } from 'preact';

import '@material/button/mdc-button.scss';
import '@material/ripple/mdc-ripple.scss';

import { withRipple } from '../../components/mdc-ripple';
import Button from '../../components/mdc-button';
import Showcase from '../../components/showcase';

import style from './style.scss';

const RippledButton = withRipple(Button);

export default function ButtonShowcase() {
	return (
		<Showcase>
			<Showcase.Title>Button</Showcase.Title>
			<Showcase.Description>
				Buttons communicate an action a user can take. They are typically placed throughout your UI,
				in places like dialogs, forms, cards, and toolbars.
			</Showcase.Description>
			<Showcase.Hero>
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
			</Showcase.Hero>
			<Showcase.Subtitle>Resources</Showcase.Subtitle>
			<Showcase.Guidelines href="https://material.io/design/components/buttons.html" />
			<Showcase.Documentation href="https://material.io/components/web/catalog/buttons/" />
			<Showcase.SourceCode href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-button" />
			<Showcase.Demo href="https://material-components.github.io/material-components-web-catalog/#/component/button" />
			<Showcase.Subtitle>Demos</Showcase.Subtitle>
			<Showcase.Section>
				<Showcase.Section.Title>Text Button</Showcase.Section.Title>
				<RippledButton className={style['demo-button']}>Default</RippledButton>
				<RippledButton className={style['demo-button']} modifiers={{ dense: true }}>
					Dense
				</RippledButton>
				<RippledButton className={style['demo-button']}>
					<Button.Icon>favorite</Button.Icon>Icon
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
					<Button.Icon>favorite</Button.Icon>Icon
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
					<Button.Icon>favorite</Button.Icon>Icon
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
					<Button.Icon>favorite</Button.Icon>Icon
				</RippledButton>
			</Showcase.Section>
		</Showcase>
	);
}
