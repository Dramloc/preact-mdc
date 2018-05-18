import { h } from 'preact';

import { withRipple } from '../../components/mdc-ripple';
import Button from '../../components/mdc-button';
import Hero from '../../components/hero';
import Page from '../../components/page';

import style from './style.scss';

const RippledButton = withRipple(Button);

export default function ButtonRoute() {
	return (
		<Page className="mdc-typography">
			<h1 class="mdc-typography--headline5">Button</h1>
			<p class="mdc-typography--body1">
				Buttons communicate an action a user can take. They are typically placed
				throughout your UI, in places like dialogs, forms, cards, and toolbars.
			</p>
			<Hero>
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
			</Hero>
			<h2 class="mdc-typography--headline6">Demos</h2>
			<div>
				<h3 className="mdc-typography--subtitle1">Text Button</h3>
				<RippledButton className={style['demo-button']}>Default</RippledButton>
				<RippledButton className={style['demo-button']} dense>
					Dense
				</RippledButton>
				<RippledButton className={style['demo-button']}>
					<Button.Icon>favorite</Button.Icon>Icon
				</RippledButton>
			</div>
			<div>
				<h3 className="mdc-typography--subtitle1">Raised Button</h3>
				<RippledButton className={style['demo-button']} raised>
					Default
				</RippledButton>
				<RippledButton className={style['demo-button']} dense raised>
					Dense
				</RippledButton>
				<RippledButton className={style['demo-button']} raised>
					<Button.Icon>favorite</Button.Icon>Icon
				</RippledButton>
			</div>
			<div>
				<h3 className="mdc-typography--subtitle1">Raised Button</h3>
				<RippledButton className={style['demo-button']} unelevated>
					Default
				</RippledButton>
				<RippledButton className={style['demo-button']} dense unelevated>
					Dense
				</RippledButton>
				<RippledButton className={style['demo-button']} unelevated>
					<Button.Icon>favorite</Button.Icon>Icon
				</RippledButton>
			</div>
			<div>
				<h3 className="mdc-typography--subtitle1">Outlined Button</h3>
				<RippledButton className={style['demo-button']} outlined>
					Default
				</RippledButton>
				<RippledButton className={style['demo-button']} dense outlined>
					Dense
				</RippledButton>
				<RippledButton className={style['demo-button']} outlined>
					<Button.Icon>favorite</Button.Icon>Icon
				</RippledButton>
			</div>
		</Page>
	);
}
