import { h } from 'preact';
import { MDCRadio } from '@material/radio';

import { Base } from '../mdc-base';
import { withMaterialComponent } from '../with-material-component';

export function RadioBase({ className, modifiers, ...props }) {
	return (
		<Base element="div" classes={{ name: 'mdc-radio' }} className={className} modifiers={modifiers}>
			<input class="mdc-radio__native-control" type="radio" {...props} />
			<div class="mdc-radio__background">
				<div class="mdc-radio__outer-circle" />
				<div class="mdc-radio__inner-circle" />
			</div>
		</Base>
	);
}

export const Radio = withMaterialComponent(RadioBase, MDCRadio);
