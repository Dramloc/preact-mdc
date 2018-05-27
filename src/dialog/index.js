import { h } from 'preact';
import { MDCDialog } from '@material/dialog';
import { strings } from '@material/dialog/constants';

import { Base } from '../base';
import { ButtonBase } from '../button';
import { withMaterialComponent } from '../with-material-component';

export function DialogBase(props) {
	return (
		<Base
			element="aside"
			role="alertdialog"
			classes={{ name: 'mdc-dialog', modifiers: ['open', 'animating'] }}
			{...props}
		/>
	);
}

export const Dialog = withMaterialComponent(DialogBase, MDCDialog, [
	{ event: strings.ACCEPT_EVENT, handler: 'onAccept' },
	{ event: strings.CANCEL_EVENT, handler: 'onCancel' }
]);

export function DialogSurface(props) {
	return <Base element="div" classes={{ name: 'mdc-dialog__surface' }} {...props} />;
}

export function DialogBackdrop(props) {
	return <Base element="div" classes={{ name: 'mdc-dialog__backdrop' }} {...props} />;
}

export function DialogHeader(props) {
	return <Base element="header" classes={{ name: 'mdc-dialog__header' }} {...props} />;
}

export function DialogHeaderTitle(props) {
	return <Base element="h2" classes={{ name: 'mdc-dialog__header__title' }} {...props} />;
}

export function DialogBody(props) {
	return (
		<Base
			element="section"
			classes={{ name: 'mdc-dialog__body', modifiers: ['scrollable'] }}
			{...props}
		/>
	);
}

export function DialogFooter(props) {
	return <Base element="footer" classes={{ name: 'mdc-dialog__footer' }} {...props} />;
}

export function DialogFooterButton(props) {
	return (
		<Base
			element={ButtonBase}
			classes={{
				name: 'mdc-dialog__footer__button',
				modifiers: ['cancel', 'accept']
			}}
			{...props}
		/>
	);
}
