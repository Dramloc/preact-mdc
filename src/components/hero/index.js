import { h } from 'preact';
import cx from 'classnames';

import style from './style.scss';

export default function Hero({ className, children, ...props }) {
	return (
		<main className={cx(style.hero, className)} {...props}>
			{children}
		</main>
	);
}
