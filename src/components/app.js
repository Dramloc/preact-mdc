import { h } from 'preact';
import { Router } from 'preact-router';

import ButtonRoute from '../routes/button';
import FabRoute from '../routes/fab';
import RippleRoute from '../routes/ripple';

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
				<ButtonRoute path="/button" />
				<FabRoute path="/fab" />
				<RippleRoute path="/ripple" />
			</Router>
		</div>
	);
}
