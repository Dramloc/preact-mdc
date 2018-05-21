import { h } from 'preact';
import { MDCRadio } from '@material/radio';

import { Base } from '../mdc-base';
import { withMaterialComponent } from '../with-material-component';

export function RadioBase({ className, modifiers, ...props }) {
	return (
		<Base element="div" classes={{ name: 'mdc-radio' }} className={className} modifiers={modifiers}>
			<input className="mdc-radio__native-control" type="radio" {...props} />
			<div className="mdc-radio__background">
				<div className="mdc-radio__outer-circle" />
				<div className="mdc-radio__inner-circle" />
			</div>
		</Base>
	);
}

export const Radio = withMaterialComponent(RadioBase, MDCRadio);
