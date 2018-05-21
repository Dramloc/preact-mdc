import { h } from 'preact';

import '@material/icon-toggle/mdc-icon-toggle.scss';

import IconToggle from '../../components/mdc-icon-toggle';
import Showcase from '../../components/showcase';

function onChange(e) {
	console.log(`on: ${e.detail.isOn}`);
}

function IconToggleHero() {
	return (
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
	);
}

function IconToggleDemos() {
	return (
		<div>
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
		</div>
	);
}

export default function IconToggleShowcase() {
	return (
		<Showcase
			title="Icon Toggle"
			description="Icons are appropriate for toggle buttons that allow a single choice to be selected or deselected, such as adding or removing a star to an item."
			hero={<IconToggleHero />}
			guidelinesLink="https://material.io/design/components/buttons.html"
			documentationLink="https://material.io/components/web/catalog/buttons/icon-toggle-buttons/"
			sourceCodeLink="https://github.com/material-components/material-components-web/tree/master/packages/mdc-icon-toggle"
			demoLink="https://material-components.github.io/material-components-web-catalog/#/component/icon-toggle"
			demos={<IconToggleDemos />}
		/>
	);
}
