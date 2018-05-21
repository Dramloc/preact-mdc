import { h } from 'preact';
import { MDCChipSet } from '@material/chips';

import { Base } from '../mdc-base';
import { withMaterialComponent } from '../with-material-component';

export function ChipSetBase(props) {
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

export const ChipSet = withMaterialComponent(ChipSetBase, MDCChipSet);
