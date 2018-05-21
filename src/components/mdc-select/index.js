import { h } from 'preact';
import { MDCSelect } from '@material/select';

import { Base } from '../mdc-base';
import { withMaterialComponent } from '../with-material-component';

export function SelectBase({ className, modifiers, label, ...props }) {
	return (
		<Base
			element="div"
			classes={{ name: 'mdc-select', modifiers: ['box'] }}
			className={className}
			modifiers={modifiers}
		>
			<select className="mdc-select__native-control" {...props} />
			{label && <label className="mdc-floating-label">{label}</label>}
			<div className="mdc-line-ripple" />
		</Base>
	);
}

export const Select = withMaterialComponent(SelectBase, MDCSelect);
