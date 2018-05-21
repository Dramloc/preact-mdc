import { h } from 'preact';

import '@material/chips/mdc-chips.scss';

import Chip from '../../components/mdc-chip';
import ChipSet from '../../components/mdc-chip-set';
import Showcase from '../../components/showcase';

function ChipsHero() {
	return (
		<ChipSet>
			<Chip>
				<Chip.Text>Chip One</Chip.Text>
			</Chip>
			<Chip>
				<Chip.Text>Chip Two</Chip.Text>
			</Chip>
			<Chip>
				<Chip.Text>Chip Three</Chip.Text>
			</Chip>
			<Chip>
				<Chip.Text>Chip Four</Chip.Text>
			</Chip>
		</ChipSet>
	);
}

function ChipsDemos() {
	return (
		<div>
			<Showcase.Section>
				<Showcase.Section.Title>Choice Chips</Showcase.Section.Title>
				<ChipSet modifiers={{ choice: true }}>
					<Chip>
						<Chip.Text>Extra Small</Chip.Text>
					</Chip>
					<Chip>
						<Chip.Text>Small</Chip.Text>
					</Chip>
					<Chip>
						<Chip.Text>Medium</Chip.Text>
					</Chip>
					<Chip>
						<Chip.Text>Large</Chip.Text>
					</Chip>
					<Chip>
						<Chip.Text>Extra Large</Chip.Text>
					</Chip>
				</ChipSet>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Filter Chips</Showcase.Section.Title>
				<Showcase.Section.Subtitle>No leading icon</Showcase.Section.Subtitle>
				<ChipSet modifiers={{ filter: true }}>
					<Chip modifiers={{ selected: true }}>
						<Chip.Checkmark />
						<Chip.Text>Tops</Chip.Text>
					</Chip>
					<Chip modifiers={{ selected: true }}>
						<Chip.Checkmark />
						<Chip.Text>Bottoms</Chip.Text>
					</Chip>
					<Chip>
						<Chip.Checkmark />
						<Chip.Text>Shoes</Chip.Text>
					</Chip>
					<Chip>
						<Chip.Checkmark />
						<Chip.Text>Accessories</Chip.Text>
					</Chip>
				</ChipSet>
				<Showcase.Section.Subtitle>With leading icon</Showcase.Section.Subtitle>
				<ChipSet modifiers={{ filter: true }}>
					<Chip modifiers={{ selected: true }}>
						<Chip.Icon modifiers={{ leading: true, 'leading-hidden': true }}>face</Chip.Icon>
						<Chip.Checkmark />
						<Chip.Text>Alice</Chip.Text>
					</Chip>
					<Chip>
						<Chip.Icon modifiers={{ leading: true }}>face</Chip.Icon>
						<Chip.Checkmark />
						<Chip.Text>Bob</Chip.Text>
					</Chip>
					<Chip>
						<Chip.Icon modifiers={{ leading: true }}>face</Chip.Icon>
						<Chip.Checkmark />
						<Chip.Text>Charlie</Chip.Text>
					</Chip>
					<Chip>
						<Chip.Icon modifiers={{ leading: true }}>face</Chip.Icon>
						<Chip.Checkmark />
						<Chip.Text>Danielle</Chip.Text>
					</Chip>
				</ChipSet>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Action Chips</Showcase.Section.Title>
				<ChipSet>
					<Chip>
						<Chip.Icon modifiers={{ leading: true }}>event</Chip.Icon>
						<Chip.Text>Add to calendar</Chip.Text>
					</Chip>
					<Chip>
						<Chip.Icon modifiers={{ leading: true }}>bookmark</Chip.Icon>
						<Chip.Text>Bookmark</Chip.Text>
					</Chip>
					<Chip>
						<Chip.Icon modifiers={{ leading: true }}>alarm</Chip.Icon>
						<Chip.Text>Set alarm</Chip.Text>
					</Chip>
					<Chip>
						<Chip.Icon modifiers={{ leading: true }}>directions</Chip.Icon>
						<Chip.Text>Get directions</Chip.Text>
					</Chip>
				</ChipSet>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Input Chips</Showcase.Section.Title>
				<ChipSet modifiers={{ input: true }}>
					<Chip>
						<Chip.Text>Apple</Chip.Text>
						<Chip.Icon modifiers={{ trailing: true }}>close</Chip.Icon>
					</Chip>
					<Chip>
						<Chip.Text>Orange</Chip.Text>
						<Chip.Icon modifiers={{ trailing: true }}>close</Chip.Icon>
					</Chip>
					<Chip>
						<Chip.Text>Banana</Chip.Text>
						<Chip.Icon modifiers={{ trailing: true }}>close</Chip.Icon>
					</Chip>
				</ChipSet>
			</Showcase.Section>
		</div>
	);
}

export default function ChipShowcase() {
	return (
		<Showcase
			title="Chips"
			description="Chips are compact elements that allow users to enter information, select a choice, filter content, or trigger an action."
			hero={<ChipsHero />}
			guidelinesLink="https://material.io/design/components/chips.html"
			documentationLink="https://material.io/components/web/catalog/chips/"
			sourceCodeLink="https://github.com/material-components/material-components-web/tree/master/packages/mdc-chips"
			demoLink="https://material-components.github.io/material-components-web-catalog/#/component/chips"
			demos={<ChipsDemos />}
		/>
	);
}
