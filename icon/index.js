import { h } from 'preact';

import { Base } from '../base';
import { withUnboundedSurfaceRipple } from '../ripple';

export function Icon(props) {
	return <Base element="i" classes={{ name: 'material-icons' }} {...props} />;
}

// FIXME: replace with icon-button (https://github.com/material-components/material-components-web/commit/39a481597f87e872caf92ef31249279bce665c07)
export const RippledIcon = withUnboundedSurfaceRipple(Icon);
