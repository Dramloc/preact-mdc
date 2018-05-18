import { h } from 'preact';
import cx from 'classnames';

import { withRippleSurface } from '../../components/mdc-ripple';
import Showcase from '../../components/showcase';

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
		<Showcase>
			<Showcase.Title>Ripple</Showcase.Title>
			<Showcase.Description>
				Ripples are visual representations used to communicate the status of a
				component or interactive element.
			</Showcase.Description>
			<Showcase.Hero>
				<RippledBox className={style['ripple-demo-box']}>
					Click here!
				</RippledBox>
			</Showcase.Hero>
			<Showcase.Subtitle>Demos</Showcase.Subtitle>
			<Showcase.Section>
				<Showcase.Section.Title>Bounded Ripple</Showcase.Section.Title>
				<RippledBox className={style['ripple-demo-box']}>
					Interact with me!
				</RippledBox>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Unbounded Ripple</Showcase.Section.Title>
				<RippledIcon
					data-mdc-ripple-is-unbounded
					className={style['ripple-demo-icon']}
				>
					favorite
				</RippledIcon>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Theme Colors: Primary</Showcase.Section.Title>
				<RippledBox
					className={cx(
						style['ripple-demo-box'],
						style['ripple-demo-box--primary']
					)}
					primary
				>
					Primary
				</RippledBox>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Theme Colors: Secondary</Showcase.Section.Title>
				<RippledBox
					className={cx(
						style['ripple-demo-box'],
						style['ripple-demo-box--secondary']
					)}
					accent
				>
					Secondary
				</RippledBox>
			</Showcase.Section>
		</Showcase>
	);
}
