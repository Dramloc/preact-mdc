import { h } from 'preact';

import '@material/drawer/mdc-drawer.scss';
import '@material/list/mdc-list.scss';
import '@material/ripple/mdc-ripple.scss';

import { withRipple, withUnboundedSurfaceRipple } from '../../components/mdc-ripple';
import Drawer from '../../components/mdc-drawer';
import Icon from '../../components/mdc-icon';
import List from '../../components/mdc-list';
import Showcase from '../../components/showcase';

import style from './style.scss';

const RippledListItem = withRipple(List.Item);
const RippledIcon = withUnboundedSurfaceRipple(Icon);

function DrawerHero() {
	return (
		<Drawer className={style['hero-drawer']} modifiers={{ permanent: true }}>
			<Drawer.Drawer>
				<Drawer.Header className={style['hero-drawer__header']}>
					<Drawer.Header.Content>Header here</Drawer.Header.Content>
				</Drawer.Header>
				<Drawer.Content>
					<List>
						<RippledListItem modifiers={{ selected: true }}>
							<List.Item.Graphic>inbox</List.Item.Graphic>
							Inbox
						</RippledListItem>
						<RippledListItem>
							<List.Item.Graphic>star</List.Item.Graphic>
							Star
						</RippledListItem>
						<RippledListItem>
							<List.Item.Graphic>send</List.Item.Graphic>
							Sent Main
						</RippledListItem>
						<RippledListItem>
							<List.Item.Graphic>drafts</List.Item.Graphic>
							Drafts
						</RippledListItem>
					</List>
				</Drawer.Content>
			</Drawer.Drawer>
		</Drawer>
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
