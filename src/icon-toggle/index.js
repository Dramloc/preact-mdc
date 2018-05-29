import { h } from 'preact';
import { MDCIconToggle } from '@material/icon-toggle';
import { strings } from '@material/icon-toggle/constants';

import { Base } from '../base';
import { Icon } from '../icon';
import { withMaterialComponent } from '../with-material-component';

// FIXME: deprecated (https://github.com/material-components/material-components-web/commit/119645e2c39d32fc7816505c2cebd57cd1ba845e)
export function IconToggleBase(props) {
	if (props[strings.DATA_TOGGLE_ON]) {
		props[strings.DATA_TOGGLE_ON] = JSON.stringify(props[strings.DATA_TOGGLE_ON]);
	}
	if (props[strings.DATA_TOGGLE_OFF]) {
		props[strings.DATA_TOGGLE_OFF] = JSON.stringify(props[strings.DATA_TOGGLE_OFF]);
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

export const IconToggle = withMaterialComponent(
	MDCIconToggle,
	[{ event: strings.CHANGE_EVENT, handler: 'onChange' }],
	['on']
)(IconToggleBase);
