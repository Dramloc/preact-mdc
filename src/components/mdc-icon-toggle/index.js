import { h } from 'preact';
import { MDCIconToggle } from '@material/icon-toggle';
import { strings } from '@material/icon-toggle/constants';

import { Base } from '../mdc-base';
import { Icon } from '../mdc-icon';
import { withMaterialComponent } from '../with-material-component';

export function IconToggleBase(props) {
	if (props['data-toggle-on']) {
		props['data-toggle-on'] = JSON.stringify(props['data-toggle-on']);
	}
	if (props['data-toggle-off']) {
		props['data-toggle-off'] = JSON.stringify(props['data-toggle-off']);
	}
	return (
		<Base
			element={Icon}
			classes={{
				name: 'mdc-icon-toggle'
			}}
			role="button"
			tabindex="0"
			{...props}
		/>
	);
}

export const IconToggle = withMaterialComponent(IconToggleBase, MDCIconToggle, [
	{ event: strings.CHANGE_EVENT, handler: 'onChange' }
]);
