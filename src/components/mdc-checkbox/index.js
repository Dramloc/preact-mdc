import { h } from 'preact';
import { MDCCheckbox } from '@material/checkbox';

import { Base } from '../mdc-base';
import { withMaterialComponent } from '../with-material-component';

export function CheckboxBase({ className, modifiers, ...props }) {
	return (
		<Base
			element="div"
			classes={{ name: 'mdc-checkbox' }}
			className={className}
			modifiers={modifiers}
		>
			<input type="checkbox" class="mdc-checkbox__native-control" {...props} />
			<div class="mdc-checkbox__background">
				<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
					<path
						class="mdc-checkbox__checkmark-path"
						fill="none"
						stroke="white"
						d="M1.73,12.91 8.1,19.28 22.79,4.59"
					/>
				</svg>
				<div class="mdc-checkbox__mixedmark" />
			</div>
		</Base>
	);
}

export const Checkbox = withMaterialComponent(CheckboxBase, MDCCheckbox);
