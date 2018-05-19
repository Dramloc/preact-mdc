import { h } from 'preact';
import { Router } from 'preact-router';
import Helmet from 'preact-helmet';

import ButtonShowcase from '../routes/button';
import CardShowcase from '../routes/card';
import ChipsShowcase from '../routes/chips';
import DialogShowcase from '../routes/dialog';
import FabShowcase from '../routes/fab';
import IconToggleShowcase from '../routes/icon-toggle';
import ListShowcase from '../routes/list';
import RippleShowcase from '../routes/ripple';

if (module.hot) {
	require('preact/debug');
}

export default function App() {
	return (
		<div id="app">
			<Helmet
				defaultTitle="Preact Material Components for the Web"
				titleTemplate="%s - Preact Material Components for the Web"
				link={[
					{
						href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500',
						rel: 'stylesheet'
					},
					{
						href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
						rel: 'stylesheet'
					}
				]}
			/>
			<Router>
				<ButtonShowcase path="/button" />
				<CardShowcase path="/card" />
				<ChipsShowcase path="/chips" />
				<DialogShowcase path="/dialog" />
				<FabShowcase path="/fab" />
				<IconToggleShowcase path="/icon-toggle" />
				<ListShowcase path="/list" />
				<RippleShowcase path="/ripple" />
			</Router>
		</div>
	);
}
