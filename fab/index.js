import { h } from 'preact';

import { Base } from '../base';
import { Icon } from '../icon';
import { withRipple } from '../ripple';

export function FabBase(props) {
	return (
		<Base
			element="button"
			classes={{
				name: 'mdc-fab',
				modifiers: ['mini', 'exited']
			}}
			{...props}
		/>
	);
}

export const Fab = withRipple(FabBase);

export function FabIcon(props) {
	return <Base element={Icon} classes={{ name: 'mdc-fab__icon' }} {...props} />;
}
