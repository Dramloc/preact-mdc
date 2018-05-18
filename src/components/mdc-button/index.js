import { h } from 'preact';
import cx from 'bem-classnames';

import Icon from '../mdc-icon';

function Button({ className, children, ...props }) {
	const modifiers = ['raised', 'unelevated', 'outlined', 'dense'];
	const classes = {
		name: 'mdc-button',
		modifiers
	};
	const combinedClassName = cx(classes, props, className);
	modifiers.forEach(modifier => delete props[modifier]);
	return (
		<button className={combinedClassName} {...props}>
			{children}
		</button>
	);
}

function ButtonIcon({ className, children, ...props }) {
	const classes = {
		name: 'mdc-button__icon'
	};
	return (
		<Icon className={cx(classes, props, className)} {...props}>
			{children}
		</Icon>
	);
}

Button.Icon = ButtonIcon;
export default Button;
