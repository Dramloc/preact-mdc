import { h } from 'preact';

import '@material/fab/mdc-fab.scss';
import '@material/ripple/mdc-ripple.scss';

import { Fab, FabIcon } from '../../components/mdc-fab';
import Showcase from '../../components/showcase';

function FabHero() {
	return (
		<Fab aria-label="Favorite">
			<FabIcon>favorite_outline</FabIcon>
		</Fab>
	);
}

function FabDemos() {
	return (
		<div>
			<Showcase.Section>
				<Showcase.Section.Title>Standard Floating Action Button</Showcase.Section.Title>
				<Fab aria-label="Favorite">
					<FabIcon>favorite_outline</FabIcon>
				</Fab>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Mini Floating Action Button</Showcase.Section.Title>
				<Fab modifiers={{ mini: true }} aria-label="Favorite">
					<FabIcon>favorite_outline</FabIcon>
				</Fab>
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
