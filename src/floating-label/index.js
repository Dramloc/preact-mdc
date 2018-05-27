import { h } from 'preact';
import { MDCFloatingLabel } from '@material/floating-label';

import { withMaterialComponent } from '../with-material-component';

export function FloatingLabelBase(props) {
	return <label className="mdc-floating-label" {...props} />;
}

export const FloatingLabel = withMaterialComponent(MDCFloatingLabel)(FloatingLabelBase);
