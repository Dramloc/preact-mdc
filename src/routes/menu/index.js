import { h } from 'preact';
import Showcase from '../../components/showcase';

function MenuHero() {
	return null;
}

function MenuDemos() {
	return null;
}

export default function MenuShowcase() {
	return (
		<Showcase
			title="Menu"
			description="Menus display a list of choices on a transient sheet of material."
			hero={<MenuHero />}
			guidelinesLink="https://material.io/design/components/menus.html"
			documentationLink="https://material.io/components/web/catalog/menus/"
			sourceCodeLink="https://github.com/material-components/material-components-web/tree/master/packages/mdc-menu"
			demoLink="https://material-components.github.io/material-components-web-catalog/#/component/menu"
			demos={<MenuDemos />}
		/>
	);
}
