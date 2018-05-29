import { h } from 'preact';
import { MDCIconButtonToggle } from '@material/icon-button';
import { strings } from '@material/icon-button/constants';

import { Base } from '../base';
import { Icon } from '../icon';
import { withMaterialComponent } from '../with-material-component';
import { withUnboundedSurfaceRipple } from '../ripple';

export function IconButtonBase(props) {
	return (
		<Base
			element={Icon}
			classes={{
				name: 'mdc-icon-button',
				modifiers: ['disabled']
			}}
			role="button"
			tabindex="0"
			{...props}
		/>
	);
}

export const IconButton = withUnboundedSurfaceRipple(IconButtonBase);

export const IconButtonToggle = withMaterialComponent(
	MDCIconButtonToggle,
	[{ event: strings.CHANGE_EVENT, handler: 'onChange' }],
	['on']
)(IconButtonBase);
