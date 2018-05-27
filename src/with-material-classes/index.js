import { h } from 'preact';
import cx from 'bem-classnames';

import { getDisplayName } from '../get-display-name';

export function withMaterialClasses(classes) {
	return Element => {
		function WithMaterialClasses({ className, ...props }) {
			return <Element className={cx(classes, props.modifiers, className)} {...props} />;
		}
		if (process.env.NODE_ENV !== 'production') {
			WithMaterialClasses.displayName = `WithMaterialClasses(${getDisplayName(Element)})`;
		}
		return WithMaterialClasses;
	};
}
