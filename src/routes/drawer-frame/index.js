import { h, Component } from 'preact';

import {
	withUnboundedSurfaceRipple,
	withRipple
} from '../../components/mdc-ripple';
import Drawer, {
	withTemporaryDrawer,
	withPersistentDrawer
} from '../../components/mdc-drawer';
import List from '../../components/mdc-list';
import Showcase from '../../components/showcase';
import TopAppBar from '../../components/mdc-top-app-bar';

import style from '../drawer/style.scss';

const RippledNavigationIcon = withUnboundedSurfaceRipple(
	TopAppBar.NavigationIcon
);
const RippledActionItem = withUnboundedSurfaceRipple(TopAppBar.ActionItem);

const TemporaryDrawer = withTemporaryDrawer(Drawer);
const PersistentDrawer = withPersistentDrawer(Drawer);
const RippledListItem = withRipple(List.Item);

export default class DrawerFrame extends Component {
	toggle = () => {
		this.drawer.MDCComponent.open = !this.drawer.MDCComponent.open;
	};
	render() {
		const search = location.search === '' ? '?permanent' : location.search;
		const modifiers = search
			.substr(1)
			.split('&')
			.reduce((acc, param) => {
				acc[param] = true;
				return acc;
			}, {});
		let DemoDrawer = Drawer;
		let title = 'Permanent Drawer';
		if (modifiers.temporary) {
			DemoDrawer = TemporaryDrawer;
			title = 'Temporary Drawer';
		}
		if (modifiers.persistent) {
			DemoDrawer = PersistentDrawer;
			title = 'Persistent Drawer';
		}
		return (
			<Showcase.Frame>
				<div className={style['drawer-container-flex']}>
					<DemoDrawer ref={ref => (this.drawer = ref)} modifiers={modifiers}>
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
									<List.Divider />
									<RippledListItem>
										<List.Item.Graphic>email</List.Item.Graphic>
										All Mail
									</RippledListItem>
									<RippledListItem>
										<List.Item.Graphic>delete</List.Item.Graphic>
										Trash
									</RippledListItem>
									<RippledListItem>
										<List.Item.Graphic>report</List.Item.Graphic>
										Spam
									</RippledListItem>
								</List>
							</Drawer.Content>
						</Drawer.Drawer>
					</DemoDrawer>
					<div className={style['drawer-header-flex']}>
						<TopAppBar>
							<TopAppBar.Row>
								<TopAppBar.Section modifiers={{ 'align-start': true }}>
									<RippledNavigationIcon
										onClick={this.toggle}
										style={modifiers.permanent ? { display: 'none' } : {}}
									>
										menu
									</RippledNavigationIcon>
									<TopAppBar.Title>{title}</TopAppBar.Title>
								</TopAppBar.Section>
								<TopAppBar.Section modifiers={{ 'align-end': true }}>
									<RippledActionItem>file_download</RippledActionItem>
									{modifiers.short !== true && (
										<RippledActionItem>print</RippledActionItem>
									)}
									{modifiers.short !== true && (
										<RippledActionItem>bookmark</RippledActionItem>
									)}
								</TopAppBar.Section>
							</TopAppBar.Row>
						</TopAppBar>
					</div>
					<main className="mdc-top-app-bar--fixed-adjust">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</main>
				</div>
			</Showcase.Frame>
		);
	}
}
