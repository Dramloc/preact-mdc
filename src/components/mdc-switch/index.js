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
			<input type="checkbox" className="mdc-switch__native-control" role="switch" {...props} />
			<div className="mdc-switch__background">
				<div className="mdc-switch__knob" />
			</div>
		</Base>
	);
}
