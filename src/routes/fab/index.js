import { h } from 'preact';

import '@material/fab/mdc-fab.scss';
import '@material/ripple/mdc-ripple.scss';

import { withRipple } from '../../components/mdc-ripple';
import Fab from '../../components/mdc-fab';
import Showcase from '../../components/showcase';

const RippledFab = withRipple(Fab);

function FabHero() {
	return (
		<RippledFab aria-label="Favorite">
			<Fab.Icon>favorite_outline</Fab.Icon>
		</RippledFab>
	);
}

function FabDemos() {
	return (
		<div>
			<Showcase.Section>
				<Showcase.Section.Title>Standard Floating Action Button</Showcase.Section.Title>
				<RippledFab aria-label="Favorite">
					<Fab.Icon>favorite_outline</Fab.Icon>
				</RippledFab>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Mini Floating Action Button</Showcase.Section.Title>
				<RippledFab modifiers={{ mini: true }} aria-label="Favorite">
					<Fab.Icon>favorite_outline</Fab.Icon>
				</RippledFab>
			</Showcase.Section>
		</div>
	);
}

export default function FabShowcase() {
	return (
		<Showcase
			title="Floating Action Button"
			description="Floating action buttons represents the primary action in an application. Only one floating action button is recommended per screen to represent the most common action."
			hero={<FabHero />}
			guidelinesLink="https://material.io/design/components/buttons-floating-action-button.html"
			documentationLink="https://material.io/components/web/catalog/buttons/floating-action-buttons/"
			sourceCodeLink="https://github.com/material-components/material-components-web/blob/master/packages/mdc-fab/"
			demoLink="https://material-components.github.io/material-components-web-catalog/#/component/fab"
			demos={<FabDemos />}
		/>
	);
}
