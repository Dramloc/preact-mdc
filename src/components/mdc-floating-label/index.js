import { h } from 'preact';
import { MDCFloatingLabel } from '@material/floating-label';

import { withMaterialComponent } from '../with-material-component';

export function FloatingLabelBase() {
	return <label className="mdc-floating-label" />;
}

export const FloatingLabel = withMaterialComponent(FloatingLabelBase, MDCFloatingLabel);
