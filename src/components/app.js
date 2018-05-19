import { h } from 'preact';
import { Router } from 'preact-router';

import ButtonShowcase from '../routes/button';
import CardShowcase from '../routes/card';
import ChipsShowcase from '../routes/chips';
import FabShowcase from '../routes/fab';
import IconToggleShowcase from '../routes/icon-toggle';
import RippleShowcase from '../routes/ripple';

if (module.hot) {
	require('preact/debug');
}

export default function App() {
	return (
		<div id="app">
			<link
				href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
				rel="stylesheet"
			/>
			<link
				href="https://fonts.googleapis.com/icon?family=Material+Icons"
				rel="stylesheet"
			/>
			<Router>
				<ButtonShowcase path="/button" />
				<CardShowcase path="/card" />
				<ChipsShowcase path="/chips" />
				<FabShowcase path="/fab" />
				<IconToggleShowcase path="/icon-toggle" />
				<RippleShowcase path="/ripple" />
			</Router>
		</div>
	);
}
