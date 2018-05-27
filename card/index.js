import { h } from 'preact';

import { Base } from '../base';
import { Button } from '../docs/node_modules/@preact/mdc/button';
import { IconToggle } from '../docs/node_modules/@preact/mdc/icon-toggle';
import { RippledIcon } from '../docs/node_modules/@preact/mdc/icon';
import { withDefaultProps } from '../with-default-props';
import { withMaterialClasses } from '../with-material-classes';
import { withSurfaceRipple } from '../ripple';

export function Card(props) {
	return (
		<Base
			element="div"
			classes={{
				name: 'mdc-card',
				modifiers: ['outlined']
			}}
			{...props}
		/>
	);
}

export function CardPrimaryActionBase(props) {
	return (
		<Base
			element="div"
			classes={{
				name: 'mdc-card__primary-action'
			}}
			tabindex="0"
			{...props}
		/>
	);
}

export const CardPrimaryAction = withSurfaceRipple(CardPrimaryActionBase);

export function CardMedia(props) {
	return (
		<Base
			element="div"
			classes={{
				name: 'mdc-card__media',
				modifiers: ['square', '16-9']
			}}
			{...props}
		/>
	);
}

export function CardMediaContent(props) {
	return (
		<Base
			element="div"
			classes={{
				name: 'mdc-card__media-content'
			}}
			{...props}
		/>
	);
}

export function CardActions(props) {
	return (
		<Base
			element="div"
			classes={{
				name: 'mdc-card__actions',
				modifiers: ['full-bleed']
			}}
			{...props}
		/>
	);
}

export function CardActionButtons(props) {
	return (
		<Base
			element="div"
			classes={{
				name: 'mdc-card__action-buttons'
			}}
			{...props}
		/>
	);
}

export function CardActionIcons(props) {
	return (
		<Base
			element="div"
			classes={{
				name: 'mdc-card__action-icons'
			}}
			{...props}
		/>
	);
}

export function withCardAction(Element) {
	return withDefaultProps(
		withMaterialClasses(Element, {
			name: 'mdc-card__action',
			modifiers: ['button', 'icon']
		}),
		{
			role: 'button',
			tabindex: '0'
		}
	);
}

export const CardActionButton = withDefaultProps(withCardAction(Button), {
	modifiers: { button: true }
});
export const CardActionIconToggle = withDefaultProps(withCardAction(IconToggle), {
	modifiers: { icon: true }
});
export const CardActionIcon = withDefaultProps(withCardAction(RippledIcon), {
	modifiers: { icon: true }
});
