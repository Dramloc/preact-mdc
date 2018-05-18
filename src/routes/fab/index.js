import { h } from 'preact';

import { withRipple } from '../../components/mdc-ripple';
import Fab from '../../components/mdc-fab';
import Showcase from '../../components/showcase';

const RippledFab = withRipple(Fab);

export default function FabShowcase() {
	return (
		<Showcase>
			<Showcase.Title>Floating Action Button</Showcase.Title>
			<Showcase.Description>
				Floating action buttons represents the primary action in an application.
				Only one floating action button is recommended per screen to represent
				the most common action.
			</Showcase.Description>
			<Showcase.Hero>
				<RippledFab aria-label="Favorite">
					<Fab.Icon>favorite_outline</Fab.Icon>
				</RippledFab>
			</Showcase.Hero>
			<Showcase.Subtitle>Demos</Showcase.Subtitle>
			<Showcase.Section>
				<Showcase.Section.Title>
					Standard Floating Action Button
				</Showcase.Section.Title>
				<RippledFab aria-label="Favorite">
					<Fab.Icon>favorite_outline</Fab.Icon>
				</RippledFab>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>
					Mini Floating Action Button
				</Showcase.Section.Title>
				<RippledFab mini aria-label="Favorite">
					<Fab.Icon>favorite_outline</Fab.Icon>
				</RippledFab>
			</Showcase.Section>
		</Showcase>
	);
}
