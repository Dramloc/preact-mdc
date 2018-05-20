import { h } from 'preact';

import Base from '../mdc-base';
import Icon from '../mdc-icon';

function Button(props) {
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

function ButtonIcon(props) {
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

Button.Icon = ButtonIcon;
export default Button;
