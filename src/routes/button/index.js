import { h } from 'preact';

import { withRipple } from '../../components/mdc-ripple';
import Button from '../../components/mdc-button';

import style from './style.scss';
import Showcase from '../../components/showcase';

const RippledButton = withRipple(Button);

export default function ButtonRoute() {
	return (
		<Showcase>
			<Showcase.Title>Button</Showcase.Title>
			<Showcase.Description>
				Buttons communicate an action a user can take. They are typically placed
				throughout your UI, in places like dialogs, forms, cards, and toolbars.
			</Showcase.Description>
			<Showcase.Hero>
				<RippledButton className={style['hero-button']}>Text</RippledButton>
				<RippledButton className={style['hero-button']} raised>
					Raised
				</RippledButton>
				<RippledButton className={style['hero-button']} unelevated>
					Unelevated
				</RippledButton>
				<RippledButton className={style['hero-button']} outlined>
					Outlined
				</RippledButton>
			</Showcase.Hero>
			<Showcase.Subtitle>Demos</Showcase.Subtitle>
			<Showcase.Section>
				<Showcase.Section.Title>Text Button</Showcase.Section.Title>
				<RippledButton className={style['demo-button']}>Default</RippledButton>
				<RippledButton className={style['demo-button']} dense>
					Dense
				</RippledButton>
				<RippledButton className={style['demo-button']}>
					<Button.Icon>favorite</Button.Icon>Icon
				</RippledButton>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Raised Button</Showcase.Section.Title>
				<RippledButton className={style['demo-button']} raised>
					Default
				</RippledButton>
				<RippledButton className={style['demo-button']} dense raised>
					Dense
				</RippledButton>
				<RippledButton className={style['demo-button']} raised>
					<Button.Icon>favorite</Button.Icon>Icon
				</RippledButton>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Raised Button</Showcase.Section.Title>
				<RippledButton className={style['demo-button']} unelevated>
					Default
				</RippledButton>
				<RippledButton className={style['demo-button']} dense unelevated>
					Dense
				</RippledButton>
				<RippledButton className={style['demo-button']} unelevated>
					<Button.Icon>favorite</Button.Icon>Icon
				</RippledButton>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Outlined Button</Showcase.Section.Title>
				<RippledButton className={style['demo-button']} outlined>
					Default
				</RippledButton>
				<RippledButton className={style['demo-button']} dense outlined>
					Dense
				</RippledButton>
				<RippledButton className={style['demo-button']} outlined>
					<Button.Icon>favorite</Button.Icon>Icon
				</RippledButton>
			</Showcase.Section>
		</Showcase>
	);
}
