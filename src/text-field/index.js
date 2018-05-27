import { h } from 'preact';
import { MDCTextField } from '@material/textfield';

import { Base } from '../base';
import { Icon } from '../icon';
import { withMaterialComponent } from '../with-material-component';

export function TextFieldBase(props) {
	return (
		<Base
			element="div"
			classes={{
				name: 'mdc-text-field',
				modifiers: [
					'outlined',
					'box',
					'with-leading-icon',
					'with-trailing-icon',
					'textarea',
					'dense',
					'fullwidth'
				]
			}}
			{...props}
		/>
	);
}

export const TextField = withMaterialComponent(MDCTextField)(TextFieldBase);

export function TextFieldInput(props) {
	return (
		<Base
			element="input"
			classes={{
				name: 'mdc-text-field__input'
			}}
			type="text"
			{...props}
		/>
	);
}

export function TextFieldHelperText(props) {
	return (
		<Base
			element="p"
			classes={{ name: 'mdc-text-field-helper-text', modifiers: ['persistent'] }}
			{...props}
		/>
	);
}

export function TextFieldIcon(props) {
	return <Base element={Icon} classes={{ name: 'mdc-text-field__icon' }} {...props} />;
}
