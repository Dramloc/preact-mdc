import { h } from 'preact';
import cx from 'classnames';
import { withUnboundedSurfaceRipple } from '../ripple';

export function Icon({ className, ...props }) {
	return <i className={cx('material-icons', className)} {...props} />;
}

// FIXME: replace with icon-button (https://github.com/material-components/material-components-web/commit/39a481597f87e872caf92ef31249279bce665c07)
export const RippledIcon = withUnboundedSurfaceRipple(Icon);
