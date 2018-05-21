import { h } from 'preact';

import { Base } from '../mdc-base';
import { Icon } from '../mdc-icon';

export function Button(props) {
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
