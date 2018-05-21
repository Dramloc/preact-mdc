import { h } from 'preact';
import Showcase from '../../components/showcase';

function SelectHero() {
	return null;
}

function SelectDemos() {
	return null;
}

export default function SelectShowcase() {
	return (
		<Showcase
			title="Select"
			description="Selects allow users to select from a single-option menu. It functions as a wrapper around the browser's native <select> element."
			hero={<SelectHero />}
			guidelinesLink="https://material.io/design/components/text-fields.html"
			documentationLink="https://material.io/develop/web/components/input-controls/select-menus/"
			sourceCodeLink="https://github.com/material-components/material-components-web/tree/master/packages/mdc-select"
			demoLink="https://material-components.github.io/material-components-web-catalog/#/component/select"
			demos={<SelectDemos />}
		/>
	);
}
