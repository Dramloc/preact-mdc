import { h } from 'preact';
import cx from 'classnames';
import { withUnboundedSurfaceRipple } from '../mdc-ripple';

export function Icon({ className, ...props }) {
	return <i className={cx('material-icons', className)} {...props} />;
}

export const RippledIcon = withUnboundedSurfaceRipple(Icon);