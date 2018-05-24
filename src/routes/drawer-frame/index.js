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
	TopAppBarRow,
	TopAppBarSection,
	TopAppBarTitle
} from '../../components/mdc-top-app-bar';
import Showcase from '../../components/showcase';

import style from './style.scss';

export default class DrawerFrame extends Component {
	state = {
		open: false
	};
	toggle = () => {
		this.setState({ open: !this.state.open });
	};
	handleOpen = () => {
		this.setState({ open: true });
	};
	handleClose = () => {
		this.setState({ open: false });
	};
	render({ variant }, { open }) {
		variant = variant || 'permanent';
		let DemoDrawer = PermanentDrawer;
		let title = 'Permanent Drawer';
		if (variant === 'temporary') {
			DemoDrawer = TemporaryDrawer;
			title = 'Temporary Drawer';
		}
		if (variant === 'persistent') {
			DemoDrawer = PersistentDrawer;
			title = 'Persistent Drawer';
		}
		return (
			<Showcase.Frame>
				<div className={style['drawer-container-flex']}>
					<DemoDrawer open={open} onOpen={this.handleOpen} onClose={this.handleClose}>
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
								<TopAppBarSection>
									<TopAppBarNavigationIcon
										onClick={this.toggle}
										style={variant === 'permanent' ? { display: 'none' } : {}}
									>
										menu
									</TopAppBarNavigationIcon>
									<TopAppBarTitle>{title}</TopAppBarTitle>
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
