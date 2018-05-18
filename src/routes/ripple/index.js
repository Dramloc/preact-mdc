import { h } from 'preact';
import cx from 'classnames';

import { withRippleSurface } from '../../components/mdc-ripple';
import Hero from '../../components/hero';
import Page from '../../components/page';

import style from './style.scss';

function Box({ children, ...props }) {
	return <div {...props}>{children}</div>;
}

function Icon({ className, children, ...props }) {
	return (
		<i className={cx(className, 'material-icons')} {...props}>
			{children}
		</i>
	);
}

const RippledBox = withRippleSurface(Box);
const RippledIcon = withRippleSurface(Icon);

export default function RippleRoute() {
	return (
		<Page className="mdc-typography">
			<h1 class="mdc-typography--headline5">Ripple</h1>
			<p class="mdc-typography--body1">
				Ripples are visual representations used to communicate the status of a
				component or interactive element.
			</p>
			<Hero>
				<RippledBox className={style['ripple-demo-box']}>
					Click here!
				</RippledBox>
			</Hero>
			<h2 class="mdc-typography--headline6">Demos</h2>
			<div>
				<h3 className="mdc-typography--subtitle1">Bounded Ripple</h3>
				<RippledBox className={style['ripple-demo-box']}>
					Interact with me!
				</RippledBox>
			</div>
			<div>
				<h3 className="mdc-typography--subtitle1">Unbounded Ripple</h3>
				<RippledIcon
					data-mdc-ripple-is-unbounded
					className={style['ripple-demo-icon']}
				>
					favorite
				</RippledIcon>
			</div>
			<div>
				<h3 className="mdc-typography--subtitle1">Theme Colors: Primary</h3>
				<RippledBox
					className={cx(
						style['ripple-demo-box'],
						style['ripple-demo-box--primary']
					)}
					primary
				>
					Primary
				</RippledBox>
			</div>
			<div>
				<h3 className="mdc-typography--subtitle1">Theme Colors: Secondary</h3>
				<RippledBox
					className={cx(
						style['ripple-demo-box'],
						style['ripple-demo-box--secondary']
					)}
					accent
				>
					Secondary
				</RippledBox>
			</div>
		</Page>
	);
}
