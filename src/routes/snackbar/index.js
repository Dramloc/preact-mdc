import { h } from 'preact';
import Showcase from '../../components/showcase';

function SnackbarHero() {
	return null;
}

function SnackbarDemos() {
	return null;
}

export default function SnackbarShowcase() {
	return (
		<Showcase
			title="Snackbar"
			description="Snackbars provide brief feedback about an operation through a message at the bottom of the screen."
			hero={<SnackbarHero />}
			guidelinesLink="https://material.io/design/components/snackbars.html"
			documentationLink="https://material.io/components/web/catalog/snackbars/"
			sourceCodeLink="https://github.com/material-components/material-components-web/tree/master/packages/mdc-snackbar"
			demoLink="https://material-components.github.io/material-components-web-catalog/#/component/snackbar"
			demos={<SnackbarDemos />}
		/>
	);
}
