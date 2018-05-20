import { h, Component } from 'preact';
import { Router, Link } from 'preact-router';
import cx from 'classnames';
import Helmet from 'preact-helmet';
import Match from 'preact-router/match';

import { withUnboundedSurfaceRipple, withRipple } from './mdc-ripple';
import ButtonShowcase from '../routes/button';
import CardShowcase from '../routes/card';
import ChipsShowcase from '../routes/chips';
import DialogShowcase from '../routes/dialog';
import Drawer, { withTemporaryDrawer } from './mdc-drawer';
import DrawerFrame from '../routes/drawer-frame';
import DrawerShowcase from '../routes/drawer';
import FabShowcase from '../routes/fab';
import IconToggleShowcase from '../routes/icon-toggle';
import List from './mdc-list';
import ListShowcase from '../routes/list';
import RippleShowcase from '../routes/ripple';
import TopAppBar from './mdc-top-app-bar';
import TopAppBarFrame from '../routes/top-app-bar-frame';
import TopAppBarShowcase from '../routes/top-app-bar';

import style from './app.scss';

if (module.hot) {
	require('preact/debug');
}

const RippleNavigationIcon = withUnboundedSurfaceRipple(
	TopAppBar.NavigationIcon
);
const RippledListItem = withRipple(List.Item);
const TemporaryDrawer = withTemporaryDrawer(Drawer);

class ListItem extends Component {
	shouldComponentUpdate() {
		return false;
	}
	render({ path, ...props }) {
		return <RippledListItem element={Link} href={path} {...props} />;
	}
}

const pathsWithoutLayout = ['/top-app-bar/frame', '/drawer/frame'];

function shouldRenderLayout(path) {
	return !pathsWithoutLayout.includes(path);
}

export default class App extends Component {
	toggleDrawer = () => {
		this.drawer.MDCComponent.open = !this.drawer.MDCComponent.open;
	};
	render() {
		return (
			<Match path="/">
				{({ path }) => (
					<div className={style.app}>
						<Helmet
							defaultTitle="Preact Material Components for the Web"
							titleTemplate="%s - Preact Material Components for the Web"
							link={[
								{
									href:
										'https://fonts.googleapis.com/css?family=Roboto:300,400,500',
									rel: 'stylesheet'
								},
								{
									href:
										'https://fonts.googleapis.com/icon?family=Material+Icons',
									rel: 'stylesheet'
								}
							]}
						/>
						{shouldRenderLayout(path) && (
							<TopAppBar className={style['app__top-app-bar']}>
								<TopAppBar.Row>
									<TopAppBar.Section>
										<RippleNavigationIcon onClick={this.toggleDrawer}>
											menu
										</RippleNavigationIcon>
										<TopAppBar.Title>
											Preact Material Components
										</TopAppBar.Title>
									</TopAppBar.Section>
								</TopAppBar.Row>
							</TopAppBar>
						)}
						<main
							className={cx(style.app__main, {
								'mdc-top-app-bar--fixed-adjust': shouldRenderLayout(path)
							})}
						>
							{shouldRenderLayout(path) && (
								<TemporaryDrawer
									ref={ref => (this.drawer = ref)}
									modifiers={{ temporary: true }}
								>
									<Drawer.Drawer>
										<Drawer.Content>
											<List>
												<ListItem onClick={this.toggleDrawer} path="/button">
													Button
												</ListItem>
												<ListItem onClick={this.toggleDrawer} path="/card">
													Card
												</ListItem>
												<ListItem onClick={this.toggleDrawer} path="/chips">
													Chips
												</ListItem>
												<ListItem onClick={this.toggleDrawer} path="/dialog">
													Dialog
												</ListItem>
												<ListItem onClick={this.toggleDrawer} path="/drawer">
													Drawer
												</ListItem>
												<ListItem onClick={this.toggleDrawer} path="/fab">
													Floating Action Button
												</ListItem>
												<ListItem
													onClick={this.toggleDrawer}
													path="/icon-toggle"
												>
													Icon Toggle Button
												</ListItem>
												<ListItem onClick={this.toggleDrawer} path="/list">
													List
												</ListItem>
												<ListItem onClick={this.toggleDrawer} path="/ripple">
													Ripple
												</ListItem>
												<ListItem
													onClick={this.toggleDrawer}
													path="/top-app-bar"
												>
													Top App Bar
												</ListItem>
											</List>
										</Drawer.Content>
									</Drawer.Drawer>
								</TemporaryDrawer>
							)}
							<Router>
								<ButtonShowcase path="/button" />
								<CardShowcase path="/card" />
								<ChipsShowcase path="/chips" />
								<DialogShowcase path="/dialog" />
								<DrawerShowcase path="/drawer" />
								<DrawerFrame path="/drawer/frame" />
								<FabShowcase path="/fab" />
								<IconToggleShowcase path="/icon-toggle" />
								<ListShowcase path="/list" />
								<RippleShowcase path="/ripple" />
								<TopAppBarShowcase path="/top-app-bar" />
								<TopAppBarFrame path="/top-app-bar/frame" />
							</Router>
						</main>
					</div>
				)}
			</Match>
		);
	}
}
