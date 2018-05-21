import { h } from 'preact';
import { MDCRipple } from '@material/ripple';

import { withBemClasses } from '../with-bem-classes';
import { withMaterialComponent } from '../with-material-component';

/**
 * Initializes MDCRipple on element
 */
export function withRipple(Element) {
	return withMaterialComponent(Element, MDCRipple);
}

/**
 * Initializes MDCRipple on element and add mdc-ripple-surface classes
 */
export function withSurfaceRipple(Element) {
	return function SurfaceRipple(props) {
		const RippledElement = withBemClasses(withRipple(Element), {
			name: 'mdc-ripple-surface',
			modifiers: ['primary', 'accent']
		});
		return <RippledElement {...props} />;
	};
}

/**
 * Initializes MDCRipple on element,
 * add mdc-ripple-surface classes
 * and data-mdc-ripple-is-unbounded attribute
 */
export function withUnboundedSurfaceRipple(Element) {
	return function UnboundedSurfaceRipple(props) {
		const RippledElement = withSurfaceRipple(Element);
		return <RippledElement data-mdc-ripple-is-unbounded {...props} />;
	};
}
