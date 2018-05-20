import { h, Component } from 'preact';
import { Link } from 'preact-router';

import '@material/drawer/mdc-drawer.scss';
import '@material/list/mdc-list.scss';
import '@material/ripple/mdc-ripple.scss';

import { withRipple } from '../mdc-ripple';
import Drawer, { withPersistentDrawer } from '../mdc-drawer';
import List from '../mdc-list';

const PersistentDrawer = withPersistentDrawer(Drawer);
const RippledListItem = withRipple(List.Item);

class ListItem extends Component {
	shouldComponentUpdate() {
		return false;
	}
	render({ path, ...props }) {
		return <RippledListItem element={Link} href={path} {...props} />;
	}
}

export default class AppDrawer extends Component {
	computeDrawerWidth() {
		return this.drawer.MDCComponent.drawer.offsetWidth;
	}

	handleDrawerOpen() {
		this.props.handleOpen(this.computeDrawerWidth());
	}

	handleDrawerClose() {
		this.props.handleClose(this.computeDrawerWidth());
	}

	componentWillReceiveProps(nextProps) {
		if (this.drawer) {
			if (this.props.isDrawerOpen !== nextProps.isDrawerOpen) {
				this.drawer.MDCComponent.open = !this.drawer.MDCComponent.open;
				if (this.drawer.MDCComponent.open) {
					this.handleDrawerOpen();
				}
				else {
					this.handleDrawerClose();
				}
			}
		}
	}

	render() {
		return (
			<PersistentDrawer
				ref={ref => (this.drawer = ref)}
				modifiers={{ persistent: true }}
			>
				<Drawer.Drawer>
					<Drawer.Content>
						<List>
							<ListItem path="/button">Button</ListItem>
							<ListItem path="/card">Card</ListItem>
							<ListItem path="/chips">Chips</ListItem>
							<ListItem path="/dialog">Dialog</ListItem>
							<ListItem path="/drawer">Drawer</ListItem>
							<ListItem path="/fab">Floating Action Button</ListItem>
							<ListItem path="/icon-toggle">Icon Toggle Button</ListItem>
							<ListItem path="/list">List</ListItem>
							<ListItem path="/ripple">Ripple</ListItem>
							<ListItem path="/top-app-bar">Top App Bar</ListItem>
						</List>
					</Drawer.Content>
				</Drawer.Drawer>
			</PersistentDrawer>
		);
	}
}
