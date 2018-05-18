import { h } from 'preact';
import cx from 'classnames';

import style from './style.scss';

export default function Page({ className, children, ...props }) {
	return (
		<main className={cx(style.page, className)} {...props}>
			{children}
		</main>
	);
}
