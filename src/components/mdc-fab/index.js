import { h } from 'preact';
import cx from 'bem-classnames';

function Fab({ className, children, ...props }) {
	const classes = {
		name: 'mdc-fab',
		modifiers: ['mini', 'exited']
	};
	return (
		<button className={cx(classes, props, className)} {...props}>
			{children}
		</button>
	);
}

function FabIcon({ className, children, ...props }) {
	const classes = {
		name: 'mdc-fab__icon'
	};
	return (
		<i className={cx(classes, props, 'material-icons', className)} {...props}>
			{children}
		</i>
	);
}

Fab.Icon = FabIcon;
export default Fab;
