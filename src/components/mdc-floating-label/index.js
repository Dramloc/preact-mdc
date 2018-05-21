import { h } from 'preact';
import { MDCFloatingLabel } from '@material/floating-label';

import { Base } from '../mdc-base';
import { withMaterialComponent } from '../with-material-component';

export function FloatingLabelBase(props) {
	return <Base element="label" classes={{ name: 'mdc-floating-label' }} {...props} />;
}

export const FloatingLabel = withMaterialComponent(FloatingLabelBase, MDCFloatingLabel);
