import { h } from 'preact';
import cx from 'classnames';

function Icon({ className, ...props }) {
	return <i className={cx('material-icons', className)} {...props} />;
}

export default Icon;
