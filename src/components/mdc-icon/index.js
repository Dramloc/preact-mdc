import { h } from 'preact';
import cx from 'classnames';

function Icon({ className, children, ...props }) {
	return (
		<i className={cx('material-icons', className)} {...props}>
			{children}
		</i>
	);
}

export default Icon;
