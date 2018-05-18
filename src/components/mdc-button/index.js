import { h } from 'preact';
import cx from 'bem-classnames';

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
		<i className={cx(classes, props, 'material-icons', className)} {...props}>
			{children}
		</i>
	);
}

Button.Icon = ButtonIcon;
export default Button;
