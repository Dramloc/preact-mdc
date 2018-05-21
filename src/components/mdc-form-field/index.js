import { MDCFormField } from '@material/form-field';

import { Base } from '../mdc-base';
import { withMaterialComponent } from '../with-material-component';

export function FormFieldBase(props) {
	return <Base element="div" classes={{ name: 'mdc-form-field' }} {...props} />;
}

export const FormField = withMaterialComponent(FormFieldBase, MDCFormField);
