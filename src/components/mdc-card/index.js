import { h } from 'preact';

import { Base } from '../mdc-base';
import { withDefaultProps } from '../with-default-props';
import { withMaterialClasses } from '../with-material-classes';
import { withSurfaceRipple } from '../mdc-ripple';

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
