import { h, Component } from 'preact';
import { Link } from 'preact-router';
import { List, ListItem, ListItemText } from '../../../../src/list';
import { Match } from 'preact-router/match';
import { PersistentDrawer, TemporaryDrawer, DrawerContent } from '../../../../src/drawer';
import cx from 'classnames';

import '@material/drawer/mdc-drawer.scss';
import '@material/list/mdc-list.scss';

import { withDisabledUpdates } from '../with-disabled-updates';

import style from './style.scss';

const SCREEN_WIDTH_BREAKPOINT = 799;
const StaticListItem = withDisabledUpdates(ListItem);

function DrawerListItem({ path, ...props }) {
	return <StaticListItem element={Link} href={path} {...props} />;
}

const drawerItems = [
	{ path: '/', text: 'Home' },
	{ path: '/button', text: 'Button' },
	{ path: '/card', text: 'Card' },
	{ path: '/checkbox', text: 'Checkbox' },
	{ path: '/chips', text: 'Chips' },
	{ path: '/dialog', text: 'Dialog' },
	{ path: '/drawer', text: 'Drawer' },
	{ path: '/elevation', text: 'Elevation' },
	{ path: '/fab', text: 'FAB' },
	{ path: '/icon-button', text: 'Icon Button' },
	{ path: '/image-list', text: 'Image List' },
	{ path: '/layout-grid', text: 'Layout Grid' },
	{ path: '/linear-progress', text: 'Linear Progress Indicator' },
	{ path: '/list', text: 'List' },
	{ path: '/menu', text: 'Menu' },
	{ path: '/radio', text: 'Radio Button' },
	{ path: '/ripple', text: 'Ripple' },
	{ path: '/select', text: 'Select' },
	{ path: '/shape', text: 'Shape' },
	{ path: '/slider', text: 'Slider' },
	{ path: '/snackbar', text: 'Snackbar' },
	{ path: '/switch', text: 'Switch' },
	{ path: '/tabs', text: 'Tabs' },
	{ path: '/text-field', text: 'Text Field' },
	{ path: '/top-app-bar', text: 'Top App Bar' },
	{ path: '/typography', text: 'Typography' }
];

function isWideScreen() {
	if (typeof window === 'undefined') {
		return true;
	}
	return document.body.offsetWidth > SCREEN_WIDTH_BREAKPOINT;
}

export default class AppDrawer extends Component {
	debounceTimeout = 0;
	state = {
		open: isWideScreen(),
		Drawer: isWideScreen() ? PersistentDrawer : TemporaryDrawer
	};
	computeDrawerWidth() {
		return this.drawer.MDCComponent.drawer.offsetWidth;
	}
	debounceHandleResize = () => {
		clearTimeout(this.debounceTimeout);
		this.debounceTimeout = setTimeout(() => this.handleResize(), 50);
	};
	handleResize = () => {
		if (!isWideScreen() && this.state.Drawer === PersistentDrawer) {
			setTimeout(() => {
				this.setState({ Drawer: TemporaryDrawer });
			}, 225);
		}
		else if (isWideScreen() && this.state.Drawer === TemporaryDrawer) {
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
	handleItemClick = () => {
		if (this.state.Drawer === TemporaryDrawer) {
			this.handleClose();
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
						{drawerItems.map(item => (
							<DrawerListItem href={item.path} key={item.path} onClick={this.handleItemClick}>
								<Match path={item.path}>
									{({ matches }) => (
										<ListItemText
											className={cx(style['list-item'], {
												[style['list-item--active']]: matches
											})}
										>
											{item.text}
										</ListItemText>
									)}
								</Match>
							</DrawerListItem>
						))}
					</List>
				</DrawerContent>
			</Drawer>
		);
	}
}
