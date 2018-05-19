import { h, Component } from 'preact';
import { MDCPersistentDrawer, MDCTemporaryDrawer } from '@material/drawer';

import '@material/drawer/mdc-drawer.scss';

import Base from '../mdc-base';

function Drawer(props) {
	return (
		<Base
			element="aside"
			classes={{
				name: 'mdc-drawer',
				modifiers: ['permanent', 'persistent', 'temporary', 'open', 'animating']
			}}
			{...props}
		/>
	);
}

function DrawerDrawer(props) {
	return (
		<Base element="nav" classes={{ name: 'mdc-drawer__drawer' }} {...props} />
	);
}

function DrawerHeader(props) {
	return (
		<Base
			element="header"
			classes={{ name: 'mdc-drawer__header' }}
			{...props}
		/>
	);
}

function DrawerHeaderContent(props) {
	return (
		<Base
			element="div"
			classes={{ name: 'mdc-drawer__header-content' }}
			{...props}
		/>
	);
}

function DrawerContent(props) {
	return (
		<Base element="nav" classes={{ name: 'mdc-drawer__content' }} {...props} />
	);
}

function DrawerToolbarSpacer(props) {
	return (
		<Base
			element="div"
			classes={{ name: 'mdc-drawer__toolbar-spacer' }}
			{...props}
		/>
	);
}

export function withPersistentDrawer(Element) {
	return class PersistentDrawer extends Component {
		componentDidMount() {
			this.MDCComponent = new MDCPersistentDrawer(this.__root.base);
		}
		componentWillUnmount() {
			this.MDCComponent.destroy();
		}
		render(props) {
			return <Element ref={ref => (this.__root = ref)} {...props} />;
		}
	};
}

export function withTemporaryDrawer(Element) {
	return class TemporaryDrawer extends Component {
		componentDidMount() {
			this.MDCComponent = new MDCTemporaryDrawer(this.__root.base);
		}
		componentWillUnmount() {
			this.MDCComponent.destroy();
		}
		render(props) {
			return <Element ref={ref => (this.__root = ref)} {...props} />;
		}
	};
}

Drawer.Drawer = DrawerDrawer;
Drawer.Header = DrawerHeader;
Drawer.Header.Content = DrawerHeaderContent;
Drawer.Content = DrawerContent;
Drawer.ToolbarSpacer = DrawerToolbarSpacer;

export default Drawer;
