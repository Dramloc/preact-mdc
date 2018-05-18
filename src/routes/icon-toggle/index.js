import { h } from 'preact';

import IconToggle from '../../components/mdc-icon-toggle';
import Showcase from '../../components/showcase';

export default function IconToggleShowcase() {
	return (
		<Showcase>
			<Showcase.Title>Icon Toggle</Showcase.Title>
			<Showcase.Description>
				Icons are appropriate for toggle buttons that allow a single choice to
				be selected or deselected, such as adding or removing a star to an item.
			</Showcase.Description>
			<Showcase.Hero>
				<IconToggle
					tabindex="0"
					data-toggle-on={{
						label: 'Remove from favorites',
						content: 'favorite'
					}}
					data-toggle-off={{
						label: 'Add to favorites',
						content: 'favorite_border'
					}}
				/>
			</Showcase.Hero>
			<Showcase.Subtitle>Demos</Showcase.Subtitle>
			<Showcase.Section>
				<Showcase.Section.Title>Pressed</Showcase.Section.Title>
				<IconToggle
					tabindex="0"
					aria-pressed="true"
					data-toggle-on={{
						label: 'Remove from favorites',
						content: 'favorite'
					}}
					data-toggle-off={{
						label: 'Add to favorites',
						content: 'favorite_border'
					}}
				/>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Disabled</Showcase.Section.Title>
				<IconToggle
					tabindex="0"
					aria-disabled="true"
					data-toggle-on={{
						label: 'Remove from favorites',
						content: 'favorite'
					}}
					data-toggle-off={{
						label: 'Add to favorites',
						content: 'favorite_border'
					}}
				>
					favorite_border
				</IconToggle>
			</Showcase.Section>
		</Showcase>
	);
}
