import { h } from 'preact';

import '@material/drawer/mdc-drawer.scss';
import '@material/icon-button/mdc-icon-button.scss';
import '@material/list/mdc-list.scss';

import { IconButton } from '../../../../src/icon-button';
import { List, ListItem, ListItemGraphic } from '../../../../src/list';
import {
	PermanentDrawer,
	DrawerHeader,
	DrawerHeaderContent,
	DrawerContent
} from '../../../../src/drawer';
import Showcase from '../../components/showcase';

import style from './style.scss';

function DrawerHero() {
	return (
		<Showcase.Demo>
			<PermanentDrawer className={style['hero-drawer']}>
				<DrawerHeader className={style['hero-drawer__header']}>
					<DrawerHeaderContent>Header here</DrawerHeaderContent>
				</DrawerHeader>
				<DrawerContent>
					<List>
						<ListItem modifiers={{ selected: true }}>
							<ListItemGraphic>inbox</ListItemGraphic>
							Inbox
						</ListItem>
						<ListItem>
							<ListItemGraphic>star</ListItemGraphic>
							Star
						</ListItem>
						<ListItem>
							<ListItemGraphic>send</ListItemGraphic>
							Sent Main
						</ListItem>
						<ListItem>
							<ListItemGraphic>drafts</ListItemGraphic>
							Drafts
						</ListItem>
					</List>
				</DrawerContent>
			</PermanentDrawer>
		</Showcase.Demo>
	);
}

function DrawerDemos() {
	return (
		<div>
			<Showcase.Section>
				<Showcase.Section.Title>
					Temporary
					<a
						className={style['drawer-frame-link']}
						href="/drawer/frame/temporary"
						target="_blank"
						rel="noopener"
					>
						<IconButton>open_in_new</IconButton>
					</a>
				</Showcase.Section.Title>
				<iframe className={style['drawer-frame']} src="/drawer/frame/temporary" />
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>
					Persistent
					<a
						className={style['drawer-frame-link']}
						href="/drawer/frame/persistent"
						target="_blank"
						rel="noopener"
					>
						<IconButton>open_in_new</IconButton>
					</a>
				</Showcase.Section.Title>
				<iframe className={style['drawer-frame']} src="/drawer/frame/persistent" />
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>
					Permanent
					<a
						className={style['drawer-frame-link']}
						href="/drawer/frame/permanent"
						target="_blank"
						rel="noopener"
					>
						<IconButton>open_in_new</IconButton>
					</a>
				</Showcase.Section.Title>
				<iframe className={style['drawer-frame']} src="/drawer/frame/permanent" />
			</Showcase.Section>
		</div>
	);
}

export default function DrawerShowcase() {
	return (
		<Showcase
			title="Drawer"
			description="The navigation drawer slides in from the left and contains the navigation destinations for your app."
			hero={<DrawerHero />}
			guidelinesLink="https://material.io/design/components/navigation-drawer.html"
			documentationLink="https://material.io/components/web/catalog/drawers/"
			sourceCodeLink="https://github.com/material-components/material-components-web/tree/master/packages/mdc-drawer"
			demoLink="https://material-components.github.io/material-components-web-catalog/#/component/drawer"
			demos={<DrawerDemos />}
		/>
	);
}
