import { h } from 'preact';
import cx from 'bem-classnames';

function Base({ className, children, classes, element: Element, modifiers, ...props }) {
	return (
		<Element className={cx(classes, modifiers, className)} {...props}>
			{children}
		</Element>
	);
}

export default Base;
