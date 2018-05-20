import { h } from 'preact';

import IconToggle from '../../components/mdc-icon-toggle';
import Showcase from '../../components/showcase';

function onChange(e) {
	console.log(`on: ${e.detail.isOn}`);
}

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
					aria-pressed="false"
					aria-label="Add to favorites"
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
			</Showcase.Hero>
			<Showcase.Subtitle>Demos</Showcase.Subtitle>
			<Showcase.Section>
				<Showcase.Section.Title>Pressed</Showcase.Section.Title>
				<IconToggle
					aria-pressed="true"
					aria-label="Remove from favorites"
					data-toggle-on={{
						label: 'Remove from favorites',
						content: 'favorite'
					}}
					data-toggle-off={{
						label: 'Add to favorites',
						content: 'favorite_border'
					}}
				>
					favorite
				</IconToggle>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Disabled</Showcase.Section.Title>
				<IconToggle
					aria-pressed="false"
					aria-disabled="true"
					aria-label="Add to favorites"
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
			<Showcase.Section>
				<Showcase.Section.Title>Change Detection</Showcase.Section.Title>
				<IconToggle
					aria-pressed="false"
					aria-label="Add to favorites"
					data-toggle-on={{
						label: 'Remove from favorites',
						content: 'favorite'
					}}
					data-toggle-off={{
						label: 'Add to favorites',
						content: 'favorite_border'
					}}
					onChange={onChange}
				>
					favorite_border
				</IconToggle>
			</Showcase.Section>
		</Showcase>
	);
}
