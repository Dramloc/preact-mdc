import { h } from 'preact';
import { MDCLineRipple } from '@material/line-ripple';

import { withMaterialComponent } from '../with-material-component';

export function LineRippleBase() {
	return <div className="mdc-line-ripple" />;
}

export const LineRipple = withMaterialComponent(MDCLineRipple)(LineRippleBase);
