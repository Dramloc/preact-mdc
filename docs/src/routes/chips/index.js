import { ChipSet, Chip, ChipText, ChipCheckmark, ChipIcon } from '../../../../src/chips';
import { h } from 'preact';

import '@material/chips/mdc-chips.scss';

import Showcase from '../../components/showcase';

function ChipsHero() {
	return (
		<Showcase.Demo>
			<ChipSet>
				<Chip>
					<ChipText>Chip One</ChipText>
				</Chip>
				<Chip>
					<ChipText>Chip Two</ChipText>
				</Chip>
				<Chip>
					<ChipText>Chip Three</ChipText>
				</Chip>
				<Chip>
					<ChipText>Chip Four</ChipText>
				</Chip>
			</ChipSet>
		</Showcase.Demo>
	);
}

function ChipsDemos() {
	return (
		<div>
			<Showcase.Section>
				<Showcase.Section.Title>Choice Chips</Showcase.Section.Title>
				<Showcase.Demo>
					<ChipSet modifiers={{ choice: true }}>
						<Chip>
							<ChipText>Extra Small</ChipText>
						</Chip>
						<Chip>
							<ChipText>Small</ChipText>
						</Chip>
						<Chip>
							<ChipText>Medium</ChipText>
						</Chip>
						<Chip>
							<ChipText>Large</ChipText>
						</Chip>
						<Chip>
							<ChipText>Extra Large</ChipText>
						</Chip>
					</ChipSet>
				</Showcase.Demo>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Filter Chips</Showcase.Section.Title>
				<Showcase.Section.Subtitle>No leading icon</Showcase.Section.Subtitle>
				<Showcase.Demo>
					<ChipSet modifiers={{ filter: true }}>
						<Chip modifiers={{ selected: true }}>
							<ChipCheckmark />
							<ChipText>Tops</ChipText>
						</Chip>
						<Chip modifiers={{ selected: true }}>
							<ChipCheckmark />
							<ChipText>Bottoms</ChipText>
						</Chip>
						<Chip>
							<ChipCheckmark />
							<ChipText>Shoes</ChipText>
						</Chip>
						<Chip>
							<ChipCheckmark />
							<ChipText>Accessories</ChipText>
						</Chip>
					</ChipSet>
				</Showcase.Demo>
				<Showcase.Section.Subtitle>With leading icon</Showcase.Section.Subtitle>
				<Showcase.Demo>
					<ChipSet modifiers={{ filter: true }}>
						<Chip modifiers={{ selected: true }}>
							<ChipIcon modifiers={{ leading: true, 'leading-hidden': true }}>face</ChipIcon>
							<ChipCheckmark />
							<ChipText>Alice</ChipText>
						</Chip>
						<Chip>
							<ChipIcon modifiers={{ leading: true }}>face</ChipIcon>
							<ChipCheckmark />
							<ChipText>Bob</ChipText>
						</Chip>
						<Chip>
							<ChipIcon modifiers={{ leading: true }}>face</ChipIcon>
							<ChipCheckmark />
							<ChipText>Charlie</ChipText>
						</Chip>
						<Chip>
							<ChipIcon modifiers={{ leading: true }}>face</ChipIcon>
							<ChipCheckmark />
							<ChipText>Danielle</ChipText>
						</Chip>
					</ChipSet>
				</Showcase.Demo>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Action Chips</Showcase.Section.Title>
				<Showcase.Demo>
					<ChipSet>
						<Chip>
							<ChipIcon modifiers={{ leading: true }}>event</ChipIcon>
							<ChipText>Add to calendar</ChipText>
						</Chip>
						<Chip>
							<ChipIcon modifiers={{ leading: true }}>bookmark</ChipIcon>
							<ChipText>Bookmark</ChipText>
						</Chip>
						<Chip>
							<ChipIcon modifiers={{ leading: true }}>alarm</ChipIcon>
							<ChipText>Set alarm</ChipText>
						</Chip>
						<Chip>
							<ChipIcon modifiers={{ leading: true }}>directions</ChipIcon>
							<ChipText>Get directions</ChipText>
						</Chip>
					</ChipSet>
				</Showcase.Demo>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Input Chips</Showcase.Section.Title>
				<Showcase.Demo>
					<ChipSet modifiers={{ input: true }}>
						<Chip>
							<ChipText>Apple</ChipText>
							<ChipIcon modifiers={{ trailing: true }}>close</ChipIcon>
						</Chip>
						<Chip>
							<ChipText>Orange</ChipText>
							<ChipIcon modifiers={{ trailing: true }}>close</ChipIcon>
						</Chip>
						<Chip>
							<ChipText>Banana</ChipText>
							<ChipIcon modifiers={{ trailing: true }}>close</ChipIcon>
						</Chip>
					</ChipSet>
				</Showcase.Demo>
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
