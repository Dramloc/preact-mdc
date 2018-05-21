import { h } from 'preact';

import '@material/list/mdc-list.scss';
import '@material/ripple/mdc-ripple.scss';

import {
	List,
	ListItem,
	ListItemText,
	ListItemSecondaryText,
	ListItemGraphic,
	ListItemMeta,
	ListDivider,
	ListGroup,
	ListGroupSubheader
} from '../../components/mdc-list';
import { withRipple } from '../../components/mdc-ripple';
import Showcase from '../../components/showcase';

import style from './style.scss';

const RippledListItem = withRipple(ListItem);

function ListHero() {
	return (
		<div className={style['hero-list']}>
			<List className={style['demo-list']}>
				<RippledListItem>
					<ListItemText>Line item</ListItemText>
				</RippledListItem>
				<RippledListItem>
					<ListItemText>Line item</ListItemText>
				</RippledListItem>
				<RippledListItem>
					<ListItemText>Line item</ListItemText>
				</RippledListItem>
			</List>
		</div>
	);
}

function ListDemos() {
	return (
		<div>
			<Showcase.Section>
				<Showcase.Section.Title>Single-Line</Showcase.Section.Title>
				<List className={style['demo-list']}>
					<RippledListItem>
						<ListItemText>Line item</ListItemText>
					</RippledListItem>
					<RippledListItem>
						<ListItemText>Line item</ListItemText>
					</RippledListItem>
					<RippledListItem>
						<ListItemText>Line item</ListItemText>
					</RippledListItem>
				</List>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Two-Line</Showcase.Section.Title>
				<List className={style['demo-list']} modifiers={{ 'two-line': true }}>
					<RippledListItem>
						<ListItemText>
							Line item
							<ListItemSecondaryText>Secondary text</ListItemSecondaryText>
						</ListItemText>
					</RippledListItem>
					<RippledListItem>
						<ListItemText>
							Line item
							<ListItemSecondaryText>Secondary text</ListItemSecondaryText>
						</ListItemText>
					</RippledListItem>
					<RippledListItem>
						<ListItemText>
							Line item
							<ListItemSecondaryText>Secondary text</ListItemSecondaryText>
						</ListItemText>
					</RippledListItem>
				</List>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Leading Icon</Showcase.Section.Title>
				<List className={style['demo-list']}>
					<RippledListItem>
						<ListItemGraphic>wifi</ListItemGraphic>
						<ListItemText>Line item</ListItemText>
					</RippledListItem>
					<RippledListItem>
						<ListItemGraphic>bluetooth</ListItemGraphic>
						<ListItemText>Line item</ListItemText>
					</RippledListItem>
					<RippledListItem>
						<ListItemGraphic>data_usage</ListItemGraphic>
						<ListItemText>Line item</ListItemText>
					</RippledListItem>
				</List>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Trailing Icon</Showcase.Section.Title>
				<List className={style['demo-list']}>
					<RippledListItem>
						<ListItemText>Line item</ListItemText>
						<ListItemMeta>info</ListItemMeta>
					</RippledListItem>
					<RippledListItem>
						<ListItemText>Line item</ListItemText>
						<ListItemMeta>info</ListItemMeta>
					</RippledListItem>
					<RippledListItem>
						<ListItemText>Line item</ListItemText>
						<ListItemMeta>info</ListItemMeta>
					</RippledListItem>
				</List>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>
					Two-Line with Leading and Trailing Icon and Divider
				</Showcase.Section.Title>
				<List className={style['demo-list']} modifiers={{ 'two-line': true, 'avatar-list': true }}>
					<RippledListItem>
						<ListItemGraphic className={style['demo-list-item__graphic']}>folder</ListItemGraphic>
						<ListItemText>
							Dog Photos
							<ListItemSecondaryText>9 Jan 2018</ListItemSecondaryText>
						</ListItemText>
						<ListItemMeta>info</ListItemMeta>
					</RippledListItem>
					<RippledListItem>
						<ListItemGraphic className={style['demo-list-item__graphic']}>folder</ListItemGraphic>
						<ListItemText>
							Cat Photos
							<ListItemSecondaryText>22 Dec 2017</ListItemSecondaryText>
						</ListItemText>
						<ListItemMeta>info</ListItemMeta>
					</RippledListItem>
					<ListDivider />
					<RippledListItem>
						<ListItemGraphic className={style['demo-list-item__graphic']}>folder</ListItemGraphic>
						<ListItemText>
							Potatoes
							<ListItemSecondaryText>30 Nov 2017</ListItemSecondaryText>
						</ListItemText>
						<ListItemMeta>info</ListItemMeta>
					</RippledListItem>
					<RippledListItem>
						<ListItemGraphic className={style['demo-list-item__graphic']}>folder</ListItemGraphic>
						<ListItemText>
							Carrots
							<ListItemSecondaryText>17 Oct 2017</ListItemSecondaryText>
						</ListItemText>
						<ListItemMeta>info</ListItemMeta>
					</RippledListItem>
				</List>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Dense</Showcase.Section.Title>
				<List className={style['demo-list']} modifiers={{ dense: true }}>
					<RippledListItem>
						<ListItemText>Line item</ListItemText>
					</RippledListItem>
					<RippledListItem>
						<ListItemText>Line item</ListItemText>
					</RippledListItem>
					<RippledListItem>
						<ListItemText>Line item</ListItemText>
					</RippledListItem>
				</List>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Groups</Showcase.Section.Title>
				<div className={style['demo-list']}>
					<ListGroup>
						<ListGroupSubheader>Group 1</ListGroupSubheader>
						<List>
							<RippledListItem>
								<ListItemText>Line item</ListItemText>
							</RippledListItem>
							<RippledListItem>
								<ListItemText>Line item</ListItemText>
							</RippledListItem>
							<RippledListItem>
								<ListItemText>Line item</ListItemText>
							</RippledListItem>
							<ListDivider />
						</List>
					</ListGroup>
					<ListGroup>
						<ListGroupSubheader>Group 2</ListGroupSubheader>
						<List>
							<RippledListItem>
								<ListItemText>Line item</ListItemText>
							</RippledListItem>
							<RippledListItem>
								<ListItemText>Line item</ListItemText>
							</RippledListItem>
							<RippledListItem>
								<ListItemText>Line item</ListItemText>
							</RippledListItem>
						</List>
					</ListGroup>
				</div>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Padded Divider</Showcase.Section.Title>
				<List className={style['demo-list']}>
					<RippledListItem>
						<ListItemText>Line item</ListItemText>
					</RippledListItem>
					<RippledListItem>
						<ListItemText>Line item</ListItemText>
					</RippledListItem>
					<ListDivider modifiers={{ padded: true }} />
					<RippledListItem>
						<ListItemText>Line item</ListItemText>
					</RippledListItem>
				</List>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Inset Divider</Showcase.Section.Title>
				<List className={style['demo-list']}>
					<RippledListItem>
						<ListItemGraphic>wifi</ListItemGraphic>
						<ListItemText>Line item</ListItemText>
					</RippledListItem>
					<RippledListItem>
						<ListItemGraphic>bluetooth</ListItemGraphic>
						<ListItemText>Line item</ListItemText>
					</RippledListItem>
					<ListDivider modifiers={{ inset: true }} />
					<RippledListItem>
						<ListItemGraphic>data_usage</ListItemGraphic>
						<ListItemText>Line item</ListItemText>
					</RippledListItem>
				</List>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Activated Item</Showcase.Section.Title>
				<List className={style['demo-list']}>
					<RippledListItem modifiers={{ activated: true }}>
						<ListItemText>Line item</ListItemText>
					</RippledListItem>
					<RippledListItem>
						<ListItemText>Line item</ListItemText>
					</RippledListItem>
					<RippledListItem>
						<ListItemText>Line item</ListItemText>
					</RippledListItem>
				</List>
			</Showcase.Section>
		</div>
	);
}

export default function ListShowcase() {
	return (
		<Showcase
			title="List"
			description="Lists present multiple line items vertically as a single continuous element."
			hero={<ListHero />}
			guidelinesLink="https://material.io/design/components/lists.html"
			documentationLink="https://material.io/components/web/catalog/lists/"
			sourceCodeLink="https://github.com/material-components/material-components-web/tree/master/packages/mdc-list"
			demoLink="https://material-components.github.io/material-components-web-catalog/#/component/list"
			demos={<ListDemos />}
		/>
	);
}
