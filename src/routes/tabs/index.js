import { h } from 'preact';
import Showcase from '../../components/showcase';

function TabsHero() {
	return null;
}

function TabsDemos() {
	return null;
}

export default function TabsShowcase() {
	return (
		<Showcase
			title="Tabs"
			description="Tabs make it easy to explore and switch between different views."
			hero={<TabsHero />}
			guidelinesLink="https://material.io/design/components/tabs.html"
			documentationLink="https://material.io/components/web/catalog/tabs/"
			sourceCodeLink="https://github.com/material-components/material-components-web/tree/master/packages/mdc-tabs"
			demoLink="https://material-components.github.io/material-components-web-catalog/#/component/tabs"
			demos={<TabsDemos />}
		/>
	);
}
