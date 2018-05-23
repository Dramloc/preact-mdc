import { h } from 'preact';
import { MDCSnackbar } from '@material/snackbar';

import { Base } from '../mdc-base';
import { withMaterialComponent } from '../with-material-component';

export function SnackbarBase(props) {
	return (
		<Base
			element="div"
			classes={{
				name: 'mdc-snackbar',
				modifiers: ['align-start', 'action-on-bottom', 'multiline', 'active']
			}}
			aria-live="true"
			aria-atomic="true"
			aria-hidden="true"
			{...props}
		/>
	);
}

export const Snackbar = withMaterialComponent(SnackbarBase, MDCSnackbar);

export function SnackbarText(props) {
	return <Base element="div" classes={{ name: 'mdc-snackbar__text' }} {...props} />;
}

export function SnackbarActionWrapper(props) {
	return <Base element="div" classes={{ name: 'mdc-snackbar__action-wrapper' }} {...props} />;
}

export function SnackbarActionButton(props) {
	return <Base element="button" classes={{ name: 'mdc-snackbar__action-button' }} {...props} />;
}
