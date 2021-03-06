import { Button } from '../../../../src/button';
import { h, Component } from 'preact';
import { ListDivider } from '../../../../src/list';
import { MenuItems, Menu, MenuItem, MenuBase, MenuAnchor } from '../../../../src/menu';

import '@material/button/mdc-button.scss';
import '@material/menu/mdc-menu.scss';

import Showcase from '../../components/showcase';

function MenuHero() {
	return (
		<Showcase.Demo>
			<MenuBase modifiers={{ open: true }}>
				<MenuItems>
					<MenuItem>A Menu Item</MenuItem>
					<MenuItem>Another Menu Item</MenuItem>
				</MenuItems>
			</MenuBase>
		</Showcase.Demo>
	);
}

class MenuDemos extends Component {
	state = {
		open: false
	};
	openMenu = () => {
		this.setState({ open: true });
	};
	closeMenu = () => {
		this.setState({ open: false });
	};
	render(_, { open }) {
		return (
			<div>
				<Showcase.Section>
					<Showcase.Section.Title>Anchored Menu</Showcase.Section.Title>
					<Showcase.Demo>
						<Button onClick={this.openMenu}>Open Menu</Button>
						<MenuAnchor>
							<Menu open={open}>
								<MenuItems>
									<MenuItem>Passionfruit</MenuItem>
									<MenuItem>Orange</MenuItem>
									<MenuItem>Guava</MenuItem>
									<MenuItem>Pitaya</MenuItem>
									<ListDivider />
									<MenuItem>Pineapple</MenuItem>
									<MenuItem>Mango</MenuItem>
									<MenuItem>Papaya</MenuItem>
									<MenuItem>Lychee</MenuItem>
								</MenuItems>
							</Menu>
						</MenuAnchor>
					</Showcase.Demo>
				</Showcase.Section>
			</div>
		);
	}
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
