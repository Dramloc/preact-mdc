import { h } from 'preact';
import { MDCChipSet } from '@material/chips';

import { Base } from '../mdc-base';
import { withMaterialComponent } from '../with-material-component';

export function ChipSet(props) {
	return (
		<Base
			element="div"
			classes={{
				name: 'mdc-chip-set',
				modifiers: ['input', 'choice', 'filter']
			}}
			{...props}
		/>
	);
}

export function withChipSet(Element) {
	return withMaterialComponent(Element, MDCChipSet);
}
