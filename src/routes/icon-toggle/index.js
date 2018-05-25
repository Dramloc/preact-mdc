import { h } from 'preact';

import '@material/icon-toggle/mdc-icon-toggle.scss';

import { IconToggle } from '../../components/mdc-icon-toggle';
import Showcase from '../../components/showcase';

function IconToggleHero() {
	return (
		<IconToggle
			on={false}
			data-toggle-on={{
				label: 'Remove from favorites',
				content: 'favorite'
			}}
			data-toggle-off={{
				label: 'Add to favorites',
				content: 'favorite_border'
			}}
		/>
	);
}

function IconToggleDemos() {
	return (
		<div>
			<Showcase.Section>
				<Showcase.Section.Title>Pressed</Showcase.Section.Title>
				<IconToggle
					on
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
					on={false}
					aria-disabled="true"
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
