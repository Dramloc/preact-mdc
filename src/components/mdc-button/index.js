import { h } from 'preact';
import cx from 'bem-classnames';

function Button({ className, children, ...props }) {
	const classes = {
		name: 'mdc-button',
		modifiers: ['raised', 'unelevated', 'outlined', 'dense']
	};
	return (
		<button className={cx(classes, props, className)} {...props}>
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
