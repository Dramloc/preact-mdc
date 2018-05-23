import { h } from 'preact';
import cx from 'classnames';

import { RippledIcon } from '../../components/mdc-icon';
import { withSurfaceRipple } from '../../components/mdc-ripple';
import Showcase from '../../components/showcase';

import style from './style.scss';

function Box(props) {
	return <div {...props} />;
}

const RippledBox = withSurfaceRipple(Box);

function RippleHero() {
	return <RippledBox className={style['ripple-demo-box']}>Click here!</RippledBox>;
}

function RippleDemos() {
	return (
		<div>
			<Showcase.Section>
				<Showcase.Section.Title>Bounded Ripple</Showcase.Section.Title>
				<RippledBox className={style['ripple-demo-box']}>Interact with me!</RippledBox>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Unbounded Ripple</Showcase.Section.Title>
				<RippledIcon className={style['ripple-demo-icon']}>favorite</RippledIcon>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Theme Colors: Primary</Showcase.Section.Title>
				<RippledBox
					className={cx(style['ripple-demo-box'], style['ripple-demo-box--primary'])}
					modifiers={{ primary: true }}
				>
					Primary
				</RippledBox>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Theme Colors: Secondary</Showcase.Section.Title>
				<RippledBox
					className={cx(style['ripple-demo-box'], style['ripple-demo-box--secondary'])}
					modifiers={{ accent: true }}
				>
					Secondary
				</RippledBox>
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
