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
			<PersistentDrawer ref={ref => (this.drawer = ref)} modifiers={{ persistent: true }}>
				<Drawer.Drawer>
					<Drawer.Content>
						<List>
							<ListItem path="/button">Button</ListItem>
							<ListItem path="/card">Card</ListItem>
							<ListItem path="/checkbox">Checkbox</ListItem>
							<ListItem path="/chips">Chips</ListItem>
							<ListItem path="/dialog">Dialog</ListItem>
							<ListItem path="/drawer">Drawer</ListItem>
							<ListItem path="/elevation">Elevation</ListItem>
							<ListItem path="/fab">FAB</ListItem>
							<ListItem path="/icon-toggle">Icon Toggle</ListItem>
							<ListItem path="/image-list">Image List</ListItem>
							<ListItem path="/layout-grid">Layout Grid</ListItem>
							<ListItem path="/linear-progress">Linear Progress Indicator</ListItem>
							<ListItem path="/list">List</ListItem>
							<ListItem path="/menu">Menu</ListItem>
							<ListItem path="/radio">Radio Button</ListItem>
							<ListItem path="/ripple">Ripple</ListItem>
							<ListItem path="/select">Select</ListItem>
							<ListItem path="/shape">Shape</ListItem>
							<ListItem path="/slider">Slider</ListItem>
							<ListItem path="/snackbar">Snackbar</ListItem>
							<ListItem path="/switch">Switch</ListItem>
							<ListItem path="/tabs">Tabs</ListItem>
							<ListItem path="/text-field">Text Field</ListItem>
							<ListItem path="/theme">Theme</ListItem>
							<ListItem path="/top-app-bar">Top App Bar</ListItem>
							<ListItem path="/typography">Typography</ListItem>
						</List>
					</Drawer.Content>
				</Drawer.Drawer>
			</PersistentDrawer>
		);
	}
}
