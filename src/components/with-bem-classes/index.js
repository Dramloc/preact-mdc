import { h } from 'preact';
import cx from 'bem-classnames';

export function withBemClasses(Element, classes) {
	return function BemClasses({ className, ...props }) {
		return <Element className={cx(classes, props.modifiers, className)} {...props} />;
	};
}
