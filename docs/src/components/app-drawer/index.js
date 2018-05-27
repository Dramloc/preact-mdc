import { h, Component } from 'preact';
import { Link } from 'preact-router';
import { List, ListItem } from '@preact/mdc/list';
import { PersistentDrawer, TemporaryDrawer, DrawerContent } from '@preact/mdc/drawer';

import '@material/drawer/mdc-drawer.scss';
import '@material/list/mdc-list.scss';

import { withDisabledUpdates } from '../with-disabled-updates';

const SCREEN_WIDTH_BREAKPOINT = 799;
const StaticListItem = withDisabledUpdates(ListItem);

function DrawerListItem({ path, ...props }) {
	return <StaticListItem element={Link} href={path} {...props} />;
}

export default class AppDrawer extends Component {
	debounceTimeout = 0;
	state = {
		open: document.body.offsetWidth > SCREEN_WIDTH_BREAKPOINT,
		Drawer: document.body.offsetWidth > SCREEN_WIDTH_BREAKPOINT ? PersistentDrawer : TemporaryDrawer
	};
	computeDrawerWidth() {
		return this.drawer.MDCComponent.drawer.offsetWidth;
	}
	debounceHandleResize = () => {
		clearTimeout(this.debounceTimeout);
		this.debounceTimeout = setTimeout(() => this.handleResize(), 50);
	};
	handleResize = () => {
		if (
			document.body.offsetWidth <= SCREEN_WIDTH_BREAKPOINT &&
			this.state.Drawer === PersistentDrawer
		) {
			setTimeout(() => {
				this.setState({ Drawer: TemporaryDrawer });
			}, 225);
		}
		else if (
			document.body.offsetWidth > SCREEN_WIDTH_BREAKPOINT &&
			this.state.Drawer === TemporaryDrawer
		) {
			setTimeout(() => {
				this.setState({ Drawer: PersistentDrawer });
			}, 225);
		}
	};
	handleOpen = () => {
		this.setState({ open: true });
		if (this.state.Drawer === PersistentDrawer) {
			this.props.handleOpen(this.computeDrawerWidth());
		}
	};
	handleClose = () => {
		this.setState({ open: false });
		if (this.state.Drawer === PersistentDrawer) {
			this.props.handleClose(this.computeDrawerWidth());
		}
	};
	componentDidMount() {
		window.addEventListener('resize', this.debounceHandleResize);
	}
	componentWillReceiveProps(nextProps) {
		if (this.props.open !== nextProps.open) {
			this.setState({ open: !this.state.open });
		}
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.debounceHandleResize);
	}
	render(_, { Drawer, open }) {
		return (
			<Drawer
				onOpen={this.handleOpen}
				onClose={this.handleClose}
				open={open}
				ref={ref => (this.drawer = ref)}
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
			</Drawer>
		);
	}
}
