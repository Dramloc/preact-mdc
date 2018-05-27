import { h } from 'preact';
import { Typography } from '../../../../src/typography';

import Showcase from '../../components/showcase';

function TypographyHero() {
	return (
		<Showcase.Demo>
			<Typography element="h1" modifiers={{ headline1: true }}>
				Typography
			</Typography>
		</Showcase.Demo>
	);
}

function TypographyDemos() {
	return (
		<Showcase.Section>
			<Showcase.Demo>
				<Typography element="h1" modifiers={{ headline1: true }}>
					Headline 1
				</Typography>
				<Typography element="h2" modifiers={{ headline2: true }}>
					Headline 2
				</Typography>
				<Typography element="h3" modifiers={{ headline3: true }}>
					Headline 3
				</Typography>
				<Typography element="h4" modifiers={{ headline4: true }}>
					Headline 4
				</Typography>
				<Typography element="h5" modifiers={{ headline5: true }}>
					Headline 5
				</Typography>
				<Typography element="h6" modifiers={{ headline6: true }}>
					Headline 6
				</Typography>
				<Typography element="h6" modifiers={{ subtitle1: true }}>
					Subtitle 1
				</Typography>
				<Typography element="h6" modifiers={{ subtitle2: true }}>
					Subtitle 2
				</Typography>
				<Typography element="p" modifiers={{ body1: true }}>
					Body 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
					unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate
					numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
				</Typography>
				<Typography element="p" modifiers={{ body2: true }}>
					Body 2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aliquid ad
					quas sunt voluptatum officia dolorum cumque, possimus nihil molestias sapiente
					necessitatibus dolor saepe inventore, soluta id accusantium voluptas beatae.
				</Typography>
				<div>
					<Typography modifiers={{ button: true }}>Button text</Typography>
				</div>
				<div>
					<Typography modifiers={{ caption: true }}>Caption text</Typography>
				</div>
				<div>
					<Typography modifiers={{ overline: true }}>Overline text</Typography>
				</div>
			</Showcase.Demo>
		</Showcase.Section>
	);
}

export default function TypographyShowcase() {
	return (
		<Showcase
			title="Typography"
			description="Typography expresses hierarchy and brand presence."
			hero={<TypographyHero />}
			guidelinesLink="https://material.io/design/typography/the-type-system.html"
			documentationLink="https://material.io/develop/web/components/typography/"
			sourceCodeLink="https://github.com/material-components/material-components-web/tree/master/packages/mdc-typography"
			demoLink="https://material-components.github.io/material-components-web-catalog/#/component/typography"
			demos={<TypographyDemos />}
		/>
	);
}
