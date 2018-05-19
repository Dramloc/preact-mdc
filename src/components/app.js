import { h } from 'preact';
import { Router } from 'preact-router';
import Helmet from 'preact-helmet';
import Match from 'preact-router/match';

import { withUnboundedSurfaceRipple } from './mdc-ripple';
import ButtonShowcase from '../routes/button';
import CardShowcase from '../routes/card';
import ChipsShowcase from '../routes/chips';
import DialogShowcase from '../routes/dialog';
import DrawerFrame from '../routes/drawer-frame';
import DrawerShowcase from '../routes/drawer';
import FabShowcase from '../routes/fab';
import IconToggleShowcase from '../routes/icon-toggle';
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

const pathsWithoutTopAppBar = ['/top-app-bar/frame', '/drawer/frame'];

function shouldRenderTopAppBar(path) {
	return !pathsWithoutTopAppBar.includes(path);
}

export default function App() {
	return (
		<Match path="/">
			{({ path }) => (
				<div id="app">
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
								href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
								rel: 'stylesheet'
							}
						]}
					/>
					{shouldRenderTopAppBar(path) && (
						<TopAppBar className={style['top-app-bar']}>
							<TopAppBar.Row>
								<TopAppBar.Section>
									<RippleNavigationIcon>menu</RippleNavigationIcon>
									<TopAppBar.Title>Preact Material Components</TopAppBar.Title>
								</TopAppBar.Section>
							</TopAppBar.Row>
						</TopAppBar>
					)}
					<main
						className={
							shouldRenderTopAppBar(path) ? 'mdc-top-app-bar--fixed-adjust' : ''
						}
					>
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
