import { h } from 'preact';
import { MDCPersistentDrawer, MDCTemporaryDrawer } from '@material/drawer';
import { strings as persistentDrawerStrings } from '@material/drawer/persistent/constants';
import { strings as temporaryDrawerStrings } from '@material/drawer/temporary/constants';

import { Base } from '../base';
import { withMaterialComponent } from '../with-material-component';
import { withDefaultProps } from '../with-default-props';

export function DrawerBase({ children, ...props }) {
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

export const PermanentDrawer = withDefaultProps(DrawerBase, { modifiers: { permanent: true } });
export const PersistentDrawer = withMaterialComponent(
	withDefaultProps(DrawerBase, { modifiers: { persistent: true } }),
	MDCPersistentDrawer,
	[
		{ event: persistentDrawerStrings.OPEN_EVENT, handler: 'onOpen' },
		{ event: persistentDrawerStrings.CLOSE_EVENT, handler: 'onClose' }
	],
	['open']
);
export const TemporaryDrawer = withMaterialComponent(
	withDefaultProps(DrawerBase, { modifiers: { temporary: true } }),
	MDCTemporaryDrawer,
	[
		{ event: temporaryDrawerStrings.OPEN_EVENT, handler: 'onOpen' },
		{ event: temporaryDrawerStrings.CLOSE_EVENT, handler: 'onClose' }
	],
	['open']
);

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
