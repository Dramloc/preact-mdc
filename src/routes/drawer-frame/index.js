import { h, Component } from 'preact';

import '@material/drawer/mdc-drawer.scss';
import '@material/list/mdc-list.scss';
import '@material/top-app-bar/mdc-top-app-bar.scss';

import {
	PermanentDrawer,
	PersistentDrawer,
	TemporaryDrawer,
	DrawerHeader,
	DrawerHeaderContent,
	DrawerContent
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
import Showcase from '../../components/showcase';

import style from './style.scss';

export default class DrawerFrame extends Component {
	toggle = () => {
		this.drawer.MDCComponent.open = !this.drawer.MDCComponent.open;
	};
	render({ variant }) {
		variant = variant || 'permanent';
		const modifiers = { [variant]: true };
		let DemoDrawer = PermanentDrawer;
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
								<ListDivider />
								<ListItem>
									<ListItemGraphic>email</ListItemGraphic>
									All Mail
								</ListItem>
								<ListItem>
									<ListItemGraphic>delete</ListItemGraphic>
									Trash
								</ListItem>
								<ListItem>
									<ListItemGraphic>report</ListItemGraphic>
									Spam
								</ListItem>
							</List>
						</DrawerContent>
					</DemoDrawer>
					<div className={style['drawer-header-flex']}>
						<TopAppBar>
							<TopAppBarRow>
								<TopAppBarSection modifiers={{ 'align-start': true }}>
									<TopAppBarNavigationIcon
										onClick={this.toggle}
										style={modifiers.permanent ? { display: 'none' } : {}}
									>
										menu
									</TopAppBarNavigationIcon>
									<TopAppBarTitle>{title}</TopAppBarTitle>
								</TopAppBarSection>
								<TopAppBarSection modifiers={{ 'align-end': true }}>
									<TopAppBarActionItem>file_download</TopAppBarActionItem>
									{modifiers.short !== true && <TopAppBarActionItem>print</TopAppBarActionItem>}
									{modifiers.short !== true && <TopAppBarActionItem>bookmark</TopAppBarActionItem>}
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
