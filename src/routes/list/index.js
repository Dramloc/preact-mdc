import { h } from 'preact';
import cx from 'classnames';

import '@material/list/mdc-list.scss';

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
import Showcase from '../../components/showcase';

import style from './style.scss';

function ListHero() {
	return (
		<div className={style['hero-list']}>
			<List className={style['demo-list']}>
				<ListItem>
					<ListItemText>Line item</ListItemText>
				</ListItem>
				<ListItem>
					<ListItemText>Line item</ListItemText>
				</ListItem>
				<ListItem>
					<ListItemText>Line item</ListItemText>
				</ListItem>
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
					<ListItem>
						<ListItemText>Line item</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemText>Line item</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemText>Line item</ListItemText>
					</ListItem>
				</List>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Two-Line</Showcase.Section.Title>
				<List className={style['demo-list']} modifiers={{ 'two-line': true }}>
					<ListItem>
						<ListItemText>
							Line item
							<ListItemSecondaryText>Secondary text</ListItemSecondaryText>
						</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemText>
							Line item
							<ListItemSecondaryText>Secondary text</ListItemSecondaryText>
						</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemText>
							Line item
							<ListItemSecondaryText>Secondary text</ListItemSecondaryText>
						</ListItemText>
					</ListItem>
				</List>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Leading Icon</Showcase.Section.Title>
				<List className={style['demo-list']}>
					<ListItem>
						<ListItemGraphic>wifi</ListItemGraphic>
						<ListItemText>Line item</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemGraphic>bluetooth</ListItemGraphic>
						<ListItemText>Line item</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemGraphic>data_usage</ListItemGraphic>
						<ListItemText>Line item</ListItemText>
					</ListItem>
				</List>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Trailing Icon</Showcase.Section.Title>
				<List className={style['demo-list']}>
					<ListItem>
						<ListItemText>Line item</ListItemText>
						<ListItemMeta>info</ListItemMeta>
					</ListItem>
					<ListItem>
						<ListItemText>Line item</ListItemText>
						<ListItemMeta>info</ListItemMeta>
					</ListItem>
					<ListItem>
						<ListItemText>Line item</ListItemText>
						<ListItemMeta>info</ListItemMeta>
					</ListItem>
				</List>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>
					Two-Line with Leading and Trailing Icon and Divider
				</Showcase.Section.Title>
				<List
					className={cx(style['demo-list'], style['demo-list--avatar-list'])}
					modifiers={{ 'two-line': true, 'avatar-list': true }}
				>
					<ListItem>
						<ListItemGraphic>folder</ListItemGraphic>
						<ListItemText>
							Dog Photos
							<ListItemSecondaryText>9 Jan 2018</ListItemSecondaryText>
						</ListItemText>
						<ListItemMeta>info</ListItemMeta>
					</ListItem>
					<ListItem>
						<ListItemGraphic>folder</ListItemGraphic>
						<ListItemText>
							Cat Photos
							<ListItemSecondaryText>22 Dec 2017</ListItemSecondaryText>
						</ListItemText>
						<ListItemMeta>info</ListItemMeta>
					</ListItem>
					<ListDivider />
					<ListItem>
						<ListItemGraphic className={style['demo-list-item__graphic']}>folder</ListItemGraphic>
						<ListItemText>
							Potatoes
							<ListItemSecondaryText>30 Nov 2017</ListItemSecondaryText>
						</ListItemText>
						<ListItemMeta>info</ListItemMeta>
					</ListItem>
					<ListItem>
						<ListItemGraphic className={style['demo-list-item__graphic']}>folder</ListItemGraphic>
						<ListItemText>
							Carrots
							<ListItemSecondaryText>17 Oct 2017</ListItemSecondaryText>
						</ListItemText>
						<ListItemMeta>info</ListItemMeta>
					</ListItem>
				</List>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Dense</Showcase.Section.Title>
				<List className={style['demo-list']} modifiers={{ dense: true }}>
					<ListItem>
						<ListItemText>Line item</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemText>Line item</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemText>Line item</ListItemText>
					</ListItem>
				</List>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Groups</Showcase.Section.Title>
				<div className={style['demo-list']}>
					<ListGroup>
						<ListGroupSubheader>Group 1</ListGroupSubheader>
						<List>
							<ListItem>
								<ListItemText>Line item</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>Line item</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>Line item</ListItemText>
							</ListItem>
							<ListDivider />
						</List>
					</ListGroup>
					<ListGroup>
						<ListGroupSubheader>Group 2</ListGroupSubheader>
						<List>
							<ListItem>
								<ListItemText>Line item</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>Line item</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>Line item</ListItemText>
							</ListItem>
						</List>
					</ListGroup>
				</div>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Padded Divider</Showcase.Section.Title>
				<List className={style['demo-list']}>
					<ListItem>
						<ListItemText>Line item</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemText>Line item</ListItemText>
					</ListItem>
					<ListDivider modifiers={{ padded: true }} />
					<ListItem>
						<ListItemText>Line item</ListItemText>
					</ListItem>
				</List>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Inset Divider</Showcase.Section.Title>
				<List className={style['demo-list']}>
					<ListItem>
						<ListItemGraphic>wifi</ListItemGraphic>
						<ListItemText>Line item</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemGraphic>bluetooth</ListItemGraphic>
						<ListItemText>Line item</ListItemText>
					</ListItem>
					<ListDivider modifiers={{ inset: true }} />
					<ListItem>
						<ListItemGraphic>data_usage</ListItemGraphic>
						<ListItemText>Line item</ListItemText>
					</ListItem>
				</List>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Activated Item</Showcase.Section.Title>
				<List className={style['demo-list']}>
					<ListItem modifiers={{ activated: true }}>
						<ListItemText>Line item</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemText>Line item</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemText>Line item</ListItemText>
					</ListItem>
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
