import { h } from 'preact';
import cx from 'bem-classnames';

export function withMaterialClasses(classes) {
	return Element =>
		function MaterialClasses({ className, ...props }) {
			return <Element className={cx(classes, props.modifiers, className)} {...props} />;
		};
}
