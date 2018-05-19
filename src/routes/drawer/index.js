import { h } from 'preact';

import {
	withRipple,
	withUnboundedSurfaceRipple
} from '../../components/mdc-ripple';
import Drawer from '../../components/mdc-drawer';
import List from '../../components/mdc-list';
import Showcase from '../../components/showcase';

import style from './style.scss';
import Icon from '../../components/mdc-icon';

const RippledListItem = withRipple(List.Item);
const RippledIcon = withUnboundedSurfaceRipple(Icon);

export default function DrawerShowcase() {
	return (
		<Showcase>
			<Showcase.Title>Drawer</Showcase.Title>
			<Showcase.Description>
				The navigation drawer slides in from the left and contains the
				navigation destinations for your app.
			</Showcase.Description>
			<Showcase.Hero>
				<Drawer
					className={style['hero-drawer']}
					modifiers={{ permanent: true }}
				>
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
			</Showcase.Hero>
			<Showcase.Subtitle>Demos</Showcase.Subtitle>
			<Showcase.Section>
				<Showcase.Section.Title>
					Temporary
					<a
						className={style['drawer-frame-link']}
						href="/drawer/frame?temporary"
						target="_blank"
						rel="noopener"
					>
						<RippledIcon>open_in_new</RippledIcon>
					</a>
				</Showcase.Section.Title>
				<iframe
					className={style['drawer-frame']}
					src="/drawer/frame?temporary"
				/>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>
					Persistent
					<a
						className={style['drawer-frame-link']}
						href="/drawer/frame?persistent"
						target="_blank"
						rel="noopener"
					>
						<RippledIcon>open_in_new</RippledIcon>
					</a>
				</Showcase.Section.Title>
				<iframe
					className={style['drawer-frame']}
					src="/drawer/frame?persistent"
				/>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>
					Permanent
					<a
						className={style['drawer-frame-link']}
						href="/drawer/frame?permanent"
						target="_blank"
						rel="noopener"
					>
						<RippledIcon>open_in_new</RippledIcon>
					</a>
				</Showcase.Section.Title>
				<iframe
					className={style['drawer-frame']}
					src="/drawer/frame?permanent"
				/>
			</Showcase.Section>
		</Showcase>
	);
}
