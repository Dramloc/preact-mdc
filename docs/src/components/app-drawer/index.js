import { h, Component } from 'preact';
import { Link } from 'preact-router';
import { List, ListItem } from '@preact/mdc/list';
import { PersistentDrawer, DrawerContent } from '@preact/mdc/drawer';

import '@material/drawer/mdc-drawer.scss';
import '@material/list/mdc-list.scss';

import { withDisabledUpdates } from '../with-disabled-updates';

const StaticListItem = withDisabledUpdates(ListItem);

function DrawerListItem({ path, ...props }) {
	return <StaticListItem element={Link} href={path} {...props} />;
}

export default class AppDrawer extends Component {
	computeDrawerWidth() {
		return this.drawer.MDCComponent.drawer.offsetWidth;
	}
	handleOpen = () => {
		this.props.handleOpen(this.computeDrawerWidth());
	}
	handleClose = () => {
		this.props.handleClose(this.computeDrawerWidth());
	}
	render({ open }) {
		return (
			<PersistentDrawer onOpen={this.handleOpen}
				onClose={this.handleClose}
				ref={ref => (this.drawer = ref)}
				open={open}
			>
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
						<DrawerListItem path="/top-app-bar">Top App Bar</DrawerListItem>
					</List>
				</DrawerContent>
			</PersistentDrawer>
		);
	}
}
