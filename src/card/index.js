import { h } from 'preact';

import { Base } from '../base';
import { Button } from '../button';
import { compose } from '../compose';
import { IconButton, IconButtonToggle } from '../icon-button';
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

export const withCardAction = compose(
	withDefaultProps({ role: 'button', tabindex: '0' }),
	withMaterialClasses({ name: 'mdc-card__action', modifiers: ['button', 'icon'] })
);

export const withCardActionButton = compose(
	withDefaultProps({ modifiers: { button: true } }),
	withCardAction
);

export const withCardActionIcon = compose(
	withDefaultProps({ modifiers: { icon: true } }),
	withCardAction
);

export const CardActionButton = withCardActionButton(Button);
export const CardActionIconToggle = withCardActionIcon(IconButtonToggle);
export const CardActionIcon = withCardActionIcon(IconButton);
