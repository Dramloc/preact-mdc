import { h } from 'preact';

import { Base } from '../mdc-base';

export function Switch({ className, modifiers, ...props }) {
	return (
		<Base
			element="div"
			classes={{ name: 'mdc-switch' }}
			className={className}
			modifiers={modifiers}
		>
			<input type="checkbox" class="mdc-switch__native-control" role="switch" {...props} />
			<div class="mdc-switch__background">
				<div class="mdc-switch__knob" />
			</div>
		</Base>
	);
}
