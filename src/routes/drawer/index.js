import { h } from 'preact';

import '@material/drawer/mdc-drawer.scss';
import '@material/list/mdc-list.scss';
import '@material/ripple/mdc-ripple.scss';

import {
	PermanentDrawer,
	DrawerHeader,
	DrawerHeaderContent,
	DrawerContent
} from '../../components/mdc-drawer';
import { RippledIcon } from '../../components/mdc-icon';
import { List, ListItem, ListItemGraphic } from '../../components/mdc-list';
import Showcase from '../../components/showcase';

import style from './style.scss';

function DrawerHero() {
	return (
		<PermanentDrawer className={style['hero-drawer']} modifiers={{ permanent: true }}>
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
						<RippledIcon>open_in_new</RippledIcon>
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
						<RippledIcon>open_in_new</RippledIcon>
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
						<RippledIcon>open_in_new</RippledIcon>
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
