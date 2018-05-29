import { h } from 'preact';
import cx from 'classnames';

import '@material/icon-button/mdc-icon-button.scss';

import { IconButton } from '../../../../src/icon-button';
import { withSurfaceRipple } from '../../../../src/ripple';
import Showcase from '../../components/showcase';

import style from './style.scss';

function Box(props) {
	return <div {...props} />;
}

const RippledBox = withSurfaceRipple(Box);

function RippleHero() {
	return (
		<Showcase.Demo>
			<RippledBox className={style['ripple-demo-box']}>Click here!</RippledBox>
		</Showcase.Demo>
	);
}

function RippleDemos() {
	return (
		<div>
			<Showcase.Section>
				<Showcase.Section.Title>Bounded Ripple</Showcase.Section.Title>
				<Showcase.Demo>
					<RippledBox className={style['ripple-demo-box']}>Interact with me!</RippledBox>
				</Showcase.Demo>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Unbounded Ripple</Showcase.Section.Title>
				<Showcase.Demo>
					<IconButton className={style['ripple-demo-icon']}>favorite</IconButton>
				</Showcase.Demo>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Theme Colors: Primary</Showcase.Section.Title>
				<Showcase.Demo>
					<RippledBox
						className={cx(style['ripple-demo-box'], style['ripple-demo-box--primary'])}
						modifiers={{ primary: true }}
					>
						Primary
					</RippledBox>
				</Showcase.Demo>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Theme Colors: Secondary</Showcase.Section.Title>
				<Showcase.Demo>
					<RippledBox
						className={cx(style['ripple-demo-box'], style['ripple-demo-box--secondary'])}
						modifiers={{ accent: true }}
					>
						Secondary
					</RippledBox>
				</Showcase.Demo>
			</Showcase.Section>
		</div>
	);
}

export default function RippleShowcase() {
	return (
		<Showcase
			title="Ripple"
			description="Ripples are visual representations used to communicate the status of a component or interactive element."
			hero={<RippleHero />}
			guidelinesLink="https://material.io/design/interaction/states.html"
			documentationLink="https://material.io/develop/web/components/ripples/"
			sourceCodeLink="https://github.com/material-components/material-components-web/tree/master/packages/mdc-ripple"
			demoLink="https://material-components.github.io/material-components-web-catalog/#/component/ripple"
			demos={<RippleDemos />}
		/>
	);
}
