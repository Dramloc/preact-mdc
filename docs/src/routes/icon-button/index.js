import { h } from 'preact';
import { IconButton, IconButtonToggle } from '../../../../src/icon-button';

import '@material/icon-button/mdc-icon-button.scss';

import Showcase from '../../components/showcase';

function IconButtonHero() {
	return (
		<Showcase.Demo>
			<IconButton>star</IconButton>
			<IconButtonToggle
				on={false}
				data-toggle-on-label="Remove from favorites"
				data-toggle-on-content="favorite"
				data-toggle-off-label="Add to favorites"
				data-toggle-off-content="favorite_border"
			/>
		</Showcase.Demo>
	);
}

function IconButtonDemos() {
	return (
		<div>
			<Showcase.Section>
				<Showcase.Section.Title>Pressed</Showcase.Section.Title>
				<Showcase.Demo>
					<IconButtonToggle
						on
						data-toggle-on-label="Remove from favorites"
						data-toggle-on-content="favorite"
						data-toggle-off-label="Add to favorites"
						data-toggle-off-content="favorite_border"
					/>
				</Showcase.Demo>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Disabled</Showcase.Section.Title>
				<Showcase.Demo>
					<IconButtonToggle
						on={false}
						modifiers={{ disabled: true }}
						data-toggle-on-label="Remove from favorites"
						data-toggle-on-content="favorite"
						data-toggle-off-label="Add to favorites"
						data-toggle-off-content="favorite_border"
					/>
				</Showcase.Demo>
			</Showcase.Section>
		</div>
	);
}

export default function IconButtonShowcase() {
	return (
		<Showcase
			title="Icon Button"
			description="Icon buttons allow users to take actions, and make choices, with a single tap."
			hero={<IconButtonHero />}
			guidelinesLink="https://material.io/design/components/buttons.html"
			documentationLink="https://material.io/components/web/catalog/buttons/icon-toggle-buttons/"
			sourceCodeLink="https://github.com/material-components/material-components-web/tree/master/packages/mdc-icon-button"
			demoLink="https://material-components.github.io/material-components-web-catalog/#/component/icon-toggle"
			demos={<IconButtonDemos />}
		/>
	);
}
