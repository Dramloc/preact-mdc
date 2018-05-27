import { h } from 'preact';
import { MDCPersistentDrawer, MDCTemporaryDrawer } from '@material/drawer';
import { strings as persistentDrawerStrings } from '@material/drawer/persistent/constants';
import { strings as temporaryDrawerStrings } from '@material/drawer/temporary/constants';

import { Base } from '../base';
import { compose } from '../compose';
import { withDefaultProps } from '../with-default-props';
import { withMaterialComponent } from '../with-material-component';

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

export const PermanentDrawer = withDefaultProps({ modifiers: { permanent: true } })(DrawerBase);
export const PersistentDrawer = compose(
	withMaterialComponent(
		MDCPersistentDrawer,
		[
			{ event: persistentDrawerStrings.OPEN_EVENT, handler: 'onOpen' },
			{ event: persistentDrawerStrings.CLOSE_EVENT, handler: 'onClose' }
		],
		['open']
	),
	withDefaultProps({ modifiers: { persistent: true } })
)(DrawerBase);
export const TemporaryDrawer = compose(
	withMaterialComponent(
		MDCTemporaryDrawer,
		[
			{ event: temporaryDrawerStrings.OPEN_EVENT, handler: 'onOpen' },
			{ event: temporaryDrawerStrings.CLOSE_EVENT, handler: 'onClose' }
		],
		['open']
	),
	withDefaultProps({ modifiers: { temporary: true } })
)(DrawerBase);

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
