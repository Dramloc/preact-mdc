import { h } from 'preact';
import { MDCPersistentDrawer, MDCTemporaryDrawer } from '@material/drawer';

import { Base } from '../mdc-base';
import { withMaterialComponent } from '../with-material-component';

export function Drawer({ children, ...props }) {
	return (
		<Base
			element="aside"
			classes={{
				name: 'mdc-drawer',
				modifiers: ['permanent', 'persistent', 'temporary', 'open', 'animating']
			}}
			{...props}
		>
			<Base element="nav" classes={{ name: 'mdc-drawer__drawer' }}>
				{children}
			</Base>
		</Base>
	);
}

export function DrawerHeader(props) {
	return <Base element="header" classes={{ name: 'mdc-drawer__header' }} {...props} />;
}

export function DrawerHeaderContent(props) {
	return <Base element="div" classes={{ name: 'mdc-drawer__header-content' }} {...props} />;
}

export function DrawerContent(props) {
	return <Base element="nav" classes={{ name: 'mdc-drawer__content' }} {...props} />;
}

export function DrawerToolbarSpacer(props) {
	return <Base element="div" classes={{ name: 'mdc-drawer__toolbar-spacer' }} {...props} />;
}

export function withPersistentDrawer(Element) {
	return withMaterialComponent(Element, MDCPersistentDrawer);
}

export function withTemporaryDrawer(Element) {
	return withMaterialComponent(Element, MDCTemporaryDrawer);
}
