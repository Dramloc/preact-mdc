import { h, Component } from 'preact';

import '@material/drawer/mdc-drawer.scss';
import '@material/list/mdc-list.scss';
import '@material/ripple/mdc-ripple.scss';
import '@material/top-app-bar/mdc-top-app-bar.scss';

import {
	Drawer,
	DrawerHeader,
	DrawerHeaderContent,
	DrawerContent,
	withTemporaryDrawer,
	withPersistentDrawer
} from '../../components/mdc-drawer';
import { List, ListItem, ListDivider, ListItemGraphic } from '../../components/mdc-list';
import {
	TopAppBar,
	TopAppBarNavigationIcon,
	TopAppBarActionItem,
	TopAppBarRow,
	TopAppBarSection,
	TopAppBarTitle
} from '../../components/mdc-top-app-bar';
import { withUnboundedSurfaceRipple, withRipple } from '../../components/mdc-ripple';
import Showcase from '../../components/showcase';

import style from '../drawer/style.scss';

const RippledNavigationIcon = withUnboundedSurfaceRipple(TopAppBarNavigationIcon);
const RippledActionItem = withUnboundedSurfaceRipple(TopAppBarActionItem);

const TemporaryDrawer = withTemporaryDrawer(Drawer);
const PersistentDrawer = withPersistentDrawer(Drawer);
const RippledListItem = withRipple(ListItem);

export default class DrawerFrame extends Component {
	toggle = () => {
		this.drawer.MDCComponent.open = !this.drawer.MDCComponent.open;
	};
	render({ variant }) {
		variant = variant || 'permanent';
		const modifiers = { [variant]: true };
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
						<DrawerHeader className={style['hero-drawer__header']}>
							<DrawerHeaderContent>Header here</DrawerHeaderContent>
						</DrawerHeader>
						<DrawerContent>
							<List>
								<RippledListItem modifiers={{ selected: true }}>
									<ListItemGraphic>inbox</ListItemGraphic>
									Inbox
								</RippledListItem>
								<RippledListItem>
									<ListItemGraphic>star</ListItemGraphic>
									Star
								</RippledListItem>
								<RippledListItem>
									<ListItemGraphic>send</ListItemGraphic>
									Sent Main
								</RippledListItem>
								<RippledListItem>
									<ListItemGraphic>drafts</ListItemGraphic>
									Drafts
								</RippledListItem>
								<ListDivider />
								<RippledListItem>
									<ListItemGraphic>email</ListItemGraphic>
									All Mail
								</RippledListItem>
								<RippledListItem>
									<ListItemGraphic>delete</ListItemGraphic>
									Trash
								</RippledListItem>
								<RippledListItem>
									<ListItemGraphic>report</ListItemGraphic>
									Spam
								</RippledListItem>
							</List>
						</DrawerContent>
					</DemoDrawer>
					<div className={style['drawer-header-flex']}>
						<TopAppBar>
							<TopAppBarRow>
								<TopAppBarSection modifiers={{ 'align-start': true }}>
									<RippledNavigationIcon
										onClick={this.toggle}
										style={modifiers.permanent ? { display: 'none' } : {}}
									>
										menu
									</RippledNavigationIcon>
									<TopAppBarTitle>{title}</TopAppBarTitle>
								</TopAppBarSection>
								<TopAppBarSection modifiers={{ 'align-end': true }}>
									<RippledActionItem>file_download</RippledActionItem>
									{modifiers.short !== true && <RippledActionItem>print</RippledActionItem>}
									{modifiers.short !== true && <RippledActionItem>bookmark</RippledActionItem>}
								</TopAppBarSection>
							</TopAppBarRow>
						</TopAppBar>
					</div>
					<main className="mdc-top-app-bar--fixed-adjust">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
							exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
							dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
							mollit anim id est laborum.
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
							exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
							dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
							mollit anim id est laborum.
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
							exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
							dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
							mollit anim id est laborum.
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
							exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
							dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
							mollit anim id est laborum.
						</p>
					</main>
				</div>
			</Showcase.Frame>
		);
	}
}
