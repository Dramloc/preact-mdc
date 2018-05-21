import { h } from 'preact';

import '@material/list/mdc-list.scss';
import '@material/ripple/mdc-ripple.scss';

import { withRipple } from '../../components/mdc-ripple';
import List from '../../components/mdc-list';
import Showcase from '../../components/showcase';

import style from './style.scss';

const RippledListItem = withRipple(List.Item);

function ListHero() {
	return (
		<div className={style['hero-list']}>
			<List className={style['demo-list']}>
				<RippledListItem>
					<List.Item.Text>Line item</List.Item.Text>
				</RippledListItem>
				<RippledListItem>
					<List.Item.Text>Line item</List.Item.Text>
				</RippledListItem>
				<RippledListItem>
					<List.Item.Text>Line item</List.Item.Text>
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
						<List.Item.Text>Line item</List.Item.Text>
					</RippledListItem>
					<RippledListItem>
						<List.Item.Text>Line item</List.Item.Text>
					</RippledListItem>
					<RippledListItem>
						<List.Item.Text>Line item</List.Item.Text>
					</RippledListItem>
				</List>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Two-Line</Showcase.Section.Title>
				<List className={style['demo-list']} modifiers={{ 'two-line': true }}>
					<RippledListItem>
						<List.Item.Text>
							Line item
							<List.Item.SecondaryText>Secondary text</List.Item.SecondaryText>
						</List.Item.Text>
					</RippledListItem>
					<RippledListItem>
						<List.Item.Text>
							Line item
							<List.Item.SecondaryText>Secondary text</List.Item.SecondaryText>
						</List.Item.Text>
					</RippledListItem>
					<RippledListItem>
						<List.Item.Text>
							Line item
							<List.Item.SecondaryText>Secondary text</List.Item.SecondaryText>
						</List.Item.Text>
					</RippledListItem>
				</List>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Leading Icon</Showcase.Section.Title>
				<List className={style['demo-list']}>
					<RippledListItem>
						<List.Item.Graphic>wifi</List.Item.Graphic>
						<List.Item.Text>Line item</List.Item.Text>
					</RippledListItem>
					<RippledListItem>
						<List.Item.Graphic>bluetooth</List.Item.Graphic>
						<List.Item.Text>Line item</List.Item.Text>
					</RippledListItem>
					<RippledListItem>
						<List.Item.Graphic>data_usage</List.Item.Graphic>
						<List.Item.Text>Line item</List.Item.Text>
					</RippledListItem>
				</List>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Trailing Icon</Showcase.Section.Title>
				<List className={style['demo-list']}>
					<RippledListItem>
						<List.Item.Text>Line item</List.Item.Text>
						<List.Item.Meta>info</List.Item.Meta>
					</RippledListItem>
					<RippledListItem>
						<List.Item.Text>Line item</List.Item.Text>
						<List.Item.Meta>info</List.Item.Meta>
					</RippledListItem>
					<RippledListItem>
						<List.Item.Text>Line item</List.Item.Text>
						<List.Item.Meta>info</List.Item.Meta>
					</RippledListItem>
				</List>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>
					Two-Line with Leading and Trailing Icon and Divider
				</Showcase.Section.Title>
				<List className={style['demo-list']} modifiers={{ 'two-line': true, 'avatar-list': true }}>
					<RippledListItem>
						<List.Item.Graphic className={style['demo-list-item__graphic']}>
							folder
						</List.Item.Graphic>
						<List.Item.Text>
							Dog Photos
							<List.Item.SecondaryText>9 Jan 2018</List.Item.SecondaryText>
						</List.Item.Text>
						<List.Item.Meta>info</List.Item.Meta>
					</RippledListItem>
					<RippledListItem>
						<List.Item.Graphic className={style['demo-list-item__graphic']}>
							folder
						</List.Item.Graphic>
						<List.Item.Text>
							Cat Photos
							<List.Item.SecondaryText>22 Dec 2017</List.Item.SecondaryText>
						</List.Item.Text>
						<List.Item.Meta>info</List.Item.Meta>
					</RippledListItem>
					<List.Divider />
					<RippledListItem>
						<List.Item.Graphic className={style['demo-list-item__graphic']}>
							folder
						</List.Item.Graphic>
						<List.Item.Text>
							Potatoes
							<List.Item.SecondaryText>30 Nov 2017</List.Item.SecondaryText>
						</List.Item.Text>
						<List.Item.Meta>info</List.Item.Meta>
					</RippledListItem>
					<RippledListItem>
						<List.Item.Graphic className={style['demo-list-item__graphic']}>
							folder
						</List.Item.Graphic>
						<List.Item.Text>
							Carrots
							<List.Item.SecondaryText>17 Oct 2017</List.Item.SecondaryText>
						</List.Item.Text>
						<List.Item.Meta>info</List.Item.Meta>
					</RippledListItem>
				</List>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Dense</Showcase.Section.Title>
				<List className={style['demo-list']} modifiers={{ dense: true }}>
					<RippledListItem>
						<List.Item.Text>Line item</List.Item.Text>
					</RippledListItem>
					<RippledListItem>
						<List.Item.Text>Line item</List.Item.Text>
					</RippledListItem>
					<RippledListItem>
						<List.Item.Text>Line item</List.Item.Text>
					</RippledListItem>
				</List>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Groups</Showcase.Section.Title>
				<div className={style['demo-list']}>
					<List.Group>
						<List.Group.Subheader>Group 1</List.Group.Subheader>
						<List>
							<RippledListItem>
								<List.Item.Text>Line item</List.Item.Text>
							</RippledListItem>
							<RippledListItem>
								<List.Item.Text>Line item</List.Item.Text>
							</RippledListItem>
							<RippledListItem>
								<List.Item.Text>Line item</List.Item.Text>
							</RippledListItem>
							<List.Divider />
						</List>
					</List.Group>
					<List.Group>
						<List.Group.Subheader>Group 2</List.Group.Subheader>
						<List>
							<RippledListItem>
								<List.Item.Text>Line item</List.Item.Text>
							</RippledListItem>
							<RippledListItem>
								<List.Item.Text>Line item</List.Item.Text>
							</RippledListItem>
							<RippledListItem>
								<List.Item.Text>Line item</List.Item.Text>
							</RippledListItem>
						</List>
					</List.Group>
				</div>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Padded Divider</Showcase.Section.Title>
				<List className={style['demo-list']}>
					<RippledListItem>
						<List.Item.Text>Line item</List.Item.Text>
					</RippledListItem>
					<RippledListItem>
						<List.Item.Text>Line item</List.Item.Text>
					</RippledListItem>
					<List.Divider modifiers={{ padded: true }} />
					<RippledListItem>
						<List.Item.Text>Line item</List.Item.Text>
					</RippledListItem>
				</List>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Inset Divider</Showcase.Section.Title>
				<List className={style['demo-list']}>
					<RippledListItem>
						<List.Item.Graphic>wifi</List.Item.Graphic>
						<List.Item.Text>Line item</List.Item.Text>
					</RippledListItem>
					<RippledListItem>
						<List.Item.Graphic>bluetooth</List.Item.Graphic>
						<List.Item.Text>Line item</List.Item.Text>
					</RippledListItem>
					<List.Divider modifiers={{ inset: true }} />
					<RippledListItem>
						<List.Item.Graphic>data_usage</List.Item.Graphic>
						<List.Item.Text>Line item</List.Item.Text>
					</RippledListItem>
				</List>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Activated Item</Showcase.Section.Title>
				<List className={style['demo-list']}>
					<RippledListItem modifiers={{ activated: true }}>
						<List.Item.Text>Line item</List.Item.Text>
					</RippledListItem>
					<RippledListItem>
						<List.Item.Text>Line item</List.Item.Text>
					</RippledListItem>
					<RippledListItem>
						<List.Item.Text>Line item</List.Item.Text>
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
