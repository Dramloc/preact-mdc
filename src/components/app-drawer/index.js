import { h, Component } from 'preact';
import { Link } from 'preact-router';

import '@material/drawer/mdc-drawer.scss';
import '@material/list/mdc-list.scss';
import '@material/ripple/mdc-ripple.scss';

import { List, ListItem } from '../mdc-list';
import { PersistentDrawer, DrawerContent } from '../mdc-drawer';
import { withDisabledUpdates } from '../with-disabled-updates';

const StaticListItem = withDisabledUpdates(ListItem);

function DrawerListItem({ path, ...props }) {
	return <StaticListItem element={Link} href={path} {...props} />;
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
				<DrawerContent>
					<List element="nav">
						<DrawerListItem path="/">Home</DrawerListItem>
						<DrawerListItem path="/button">Button</DrawerListItem>
						<DrawerListItem path="/card">Card</DrawerListItem>
						<DrawerListItem path="/checkbox">Checkbox</DrawerListItem>
						<DrawerListItem path="/chips">Chips</DrawerListItem>
						<DrawerListItem path="/dialog">Dialog</DrawerListItem>
						<DrawerListItem path="/drawer">Drawer</DrawerListItem>
						<DrawerListItem path="/elevation">Elevation</DrawerListItem>
						<DrawerListItem path="/fab">FAB</DrawerListItem>
						<DrawerListItem path="/icon-toggle">Icon Toggle</DrawerListItem>
						<DrawerListItem path="/image-list">Image List</DrawerListItem>
						<DrawerListItem path="/layout-grid">Layout Grid</DrawerListItem>
						<DrawerListItem path="/linear-progress">Linear Progress Indicator</DrawerListItem>
						<DrawerListItem path="/list">List</DrawerListItem>
						<DrawerListItem path="/menu">Menu</DrawerListItem>
						<DrawerListItem path="/radio">Radio Button</DrawerListItem>
						<DrawerListItem path="/ripple">Ripple</DrawerListItem>
						<DrawerListItem path="/select">Select</DrawerListItem>
						<DrawerListItem path="/shape">Shape</DrawerListItem>
						<DrawerListItem path="/slider">Slider</DrawerListItem>
						<DrawerListItem path="/snackbar">Snackbar</DrawerListItem>
						<DrawerListItem path="/switch">Switch</DrawerListItem>
						<DrawerListItem path="/tabs">Tabs</DrawerListItem>
						<DrawerListItem path="/text-field">Text Field</DrawerListItem>
						<DrawerListItem path="/theme">Theme</DrawerListItem>
						<DrawerListItem path="/top-app-bar">Top App Bar</DrawerListItem>
						<DrawerListItem path="/typography">Typography</DrawerListItem>
					</List>
				</DrawerContent>
			</PersistentDrawer>
		);
	}
}
