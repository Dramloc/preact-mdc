import { h } from 'preact';
import cx from 'bem-classnames';

function Card({ className, children, ...props }) {
	const modifiers = ['outlined'];
	const classes = {
		name: 'mdc-card',
		modifiers
	};
	const combinedClassName = cx(classes, props, className);
	modifiers.forEach(modifier => delete props[modifier]);
	return (
		<div className={combinedClassName} {...props}>
			{children}
		</div>
	);
}

function CardPrimaryAction({ className, children, ...props }) {
	const classes = {
		name: 'mdc-card__primary-action'
	};
	return (
		<div className={cx(classes, props, className)} {...props}>
			{children}
		</div>
	);
}

function CardMedia({ className, children, ...props }) {
	const modifiers = ['square', '16-9'];
	const classes = {
		name: 'mdc-card__media',
		modifiers
	};
	const combinedClassName = cx(classes, props, className);
	modifiers.forEach(modifier => delete props[modifier]);
	return (
		<div className={combinedClassName} {...props}>
			{children}
		</div>
	);
}

function CardMediaContent({ className, children, ...props }) {
	const classes = {
		name: 'mdc-card__media-content'
	};
	return (
		<div className={cx(classes, props, className)} {...props}>
			{children}
		</div>
	);
}

function CardActions({ className, children, ...props }) {
	const modifiers = ['full-bleed'];
	const classes = {
		name: 'mdc-card__actions',
		modifiers
	};
	const combinedClassName = cx(classes, props, className);
	modifiers.forEach(modifier => delete props[modifier]);
	return (
		<div className={combinedClassName} {...props}>
			{children}
		</div>
	);
}

function CardActionButtons({ className, children, ...props }) {
	const classes = {
		name: 'mdc-card__action-buttons'
	};
	return (
		<div className={cx(classes, props, className)} {...props}>
			{children}
		</div>
	);
}

function CardActionIcons({ className, children, ...props }) {
	const classes = {
		name: 'mdc-card__action-icons'
	};
	return (
		<div className={cx(classes, props, className)} {...props}>
			{children}
		</div>
	);
}

function withAction(Element) {
	return function WithAction({ className, children, ...props }) {
		const modifiers = ['button', 'icon'];
		const classes = {
			name: 'mdc-card__action',
			modifiers
		};
		const combinedClassName = cx(classes, props, className);
		modifiers.forEach(modifier => delete props[modifier]);
		return (
			<Element className={combinedClassName} {...props}>
				{children}
			</Element>
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
