import { h, Component } from 'preact';
import { Router } from 'preact-router';
import Helmet from 'preact-helmet';

import AppLayout from '../app-layout';
import DrawerFrame from '../../routes/drawer-frame';
import TopAppBarFrame from '../../routes/top-app-bar-frame';

if (module.hot) {
	require('preact/debug');
}

export default class App extends Component {
	handleChange = e => {
		if (this.currentUrl !== e.url) {
			this.currentUrl = e.url;
			document.documentElement.scrollTop = 0;
		}
	};

	render() {
		return (
			<div className="mdc-typography">
				<Helmet
					defaultTitle="Preact Material Components for the Web"
					titleTemplate="%s - Preact Material Components for the Web"
					meta={[
						{
							property: 'og:site_name',
							content: 'Preact Material Components'
						}
					]}
					link={[
						{
							href:
								'https://fonts.googleapis.com/css?family=Roboto+Mono|Roboto:300,400,500',
							rel: 'stylesheet'
						},
						{
							href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
							rel: 'stylesheet'
						}
					]}
				/>
				<Router onChange={this.handleChange}>
					<TopAppBarFrame path="/top-app-bar/frame" />
					<DrawerFrame path="/drawer/frame" />
					<AppLayout path="/:component" />
				</Router>
			</div>
		);
	}
}
