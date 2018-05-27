import { h } from 'preact';
import cx from 'bem-classnames';

export function Base({ className, classes, element: Element, modifiers, ...props }) {
	return (
		<Element className={cx(classes, modifiers, className)} {...props} />
	);
}
