import { h } from 'preact';
import cx from 'bem-classnames';

import Base from '../mdc-base';

function Card(props) {
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

function CardPrimaryAction(props) {
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

function CardMedia(props) {
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

function CardMediaContent(props) {
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

function CardActions(props) {
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

function CardActionButtons(props) {
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

function CardActionIcons(props) {
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

function withAction(Element) {
	return function CardAction({ className, ...props }) {
		const classes = {
			name: 'mdc-card__action',
			modifiers: ['button', 'icon']
		};
		return (
			<Element
				className={cx(classes, props.modifiers, className)}
				role="button"
				tabindex="0"
				{...props}
			/>
		);
	};
}

Card.PrimaryAction = CardPrimaryAction;
Card.Media = CardMedia;
Card.MediaContent = CardMediaContent;
Card.Actions = CardActions;
Card.ActionButtons = CardActionButtons;
Card.ActionIcons = CardActionIcons;

export default Card;
export { withAction };
