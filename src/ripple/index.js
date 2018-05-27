import { h } from 'preact';
import { MDCRipple } from '@material/ripple';

import { compose } from '../compose';
import { withDefaultProps } from '../with-default-props';
import { withMaterialClasses } from '../with-material-classes';
import { withMaterialComponent } from '../with-material-component';

/**
 * Initializes MDCRipple on element
 */
export const withRipple = withMaterialComponent(MDCRipple);

/**
 * Initializes MDCRipple on element and add mdc-ripple-surface classes
 */
export const withSurfaceRipple = compose(
	withRipple,
	withMaterialClasses({
		name: 'mdc-ripple-surface',
		modifiers: ['primary', 'accent']
	})
);

/**
 * Initializes MDCRipple on element,
 * add mdc-ripple-surface classes
 * and data-mdc-ripple-is-unbounded attribute
 */
export const withUnboundedSurfaceRipple = compose(
	withSurfaceRipple,
	withDefaultProps({ 'data-mdc-ripple-is-unbounded': true })
);
