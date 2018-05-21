import { h } from 'preact';
import cx from 'classnames';

export function Icon({ className, ...props }) {
	return <i className={cx('material-icons', className)} {...props} />;
}
