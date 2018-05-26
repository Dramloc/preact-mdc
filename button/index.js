import { h } from 'preact';

import { Base } from '../base';
import { Icon } from '../icon';
import { withRipple } from '../ripple';

export function ButtonBase(props) {
	return (
		<Base
			element="button"
			classes={{
				name: 'mdc-button',
				modifiers: ['raised', 'unelevated', 'outlined', 'dense']
			}}
			{...props}
		/>
	);
}

export const Button = withRipple(ButtonBase);

export function ButtonIcon(props) {
	return (
		<Base
			element={Icon}
			classes={{
				name: 'mdc-button__icon'
			}}
			{...props}
		/>
	);
}
