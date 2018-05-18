import { h } from 'preact';
import cx from 'classnames';

import {
	withSurfaceRipple,
	withUnboundedSurfaceRipple
} from '../../components/mdc-ripple';
import Showcase from '../../components/showcase';

import style from './style.scss';
import Icon from '../../components/mdc-icon';

function Box({ children, ...props }) {
	return <div {...props}>{children}</div>;
}

const RippledBox = withSurfaceRipple(Box);
const RippledIcon = withUnboundedSurfaceRipple(Icon);

export default function RippleShowcase() {
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
				<RippledIcon className={style['ripple-demo-icon']}>
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
