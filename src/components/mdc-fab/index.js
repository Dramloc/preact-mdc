import { h } from 'preact';
import cx from 'bem-classnames';

import Icon from '../mdc-icon';

function Fab({ className, children, ...props }) {
	const modifiers = ['mini', 'exited'];
	const classes = {
		name: 'mdc-fab',
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

function FabIcon({ className, children, ...props }) {
	const classes = {
		name: 'mdc-fab__icon'
	};
	return (
		<Icon className={cx(classes, props, className)} {...props}>
			{children}
		</Icon>
	);
}

Fab.Icon = FabIcon;
export default Fab;
