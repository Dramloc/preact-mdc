import { h } from 'preact';
import { MDCIconToggle } from '@material/icon-toggle';
import { strings } from '@material/icon-toggle/constants';

import { Base } from '../base';
import { Icon } from '../icon';
import { withMaterialComponent } from '../with-material-component';

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
	IconToggleBase,
	MDCIconToggle,
	[{ event: strings.CHANGE_EVENT, handler: 'onChange' }],
	['on']
);
