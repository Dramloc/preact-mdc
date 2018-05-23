import { h, Component } from 'preact';
import { Router } from 'preact-router';
import Helmet from 'preact-helmet';

import AppLayout from '../app-layout';
import DrawerFrame from '../../routes/drawer-frame';
import TopAppBarFrame from '../../routes/top-app-bar-frame';

if (module.hot) {
	require('preact/debug');
}

function scrollTop() {
	if (typeof window !== 'undefined') {
		document.documentElement.scrollTop = 0;
	}
}

export default class App extends Component {
	handleChange = e => {
		if (this.currentUrl !== e.url) {
			this.currentUrl = e.url;
			scrollTop();
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
				/>
				<Router onChange={this.handleChange}>
					<TopAppBarFrame path="/top-app-bar/frame/:variant?" />
					<DrawerFrame path="/drawer/frame/:variant" />
					<AppLayout path="/:component?" />
				</Router>
			</div>
		);
	}
}
