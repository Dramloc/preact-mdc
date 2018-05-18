import { h } from 'preact';
import { Router } from 'preact-router';

import ButtonShowcase from '../routes/button';
import FabShowcase from '../routes/fab';
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
				<FabShowcase path="/fab" />
				<RippleShowcase path="/ripple" />
			</Router>
		</div>
	);
}
