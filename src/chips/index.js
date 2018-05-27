import { h } from 'preact';
import { MDCChipSet } from '@material/chips';
import { strings } from '@material/chips/chip/constants';

import { Base } from '../base';
import { Icon } from '../icon';
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

export const ChipSet = withMaterialComponent(MDCChipSet, [
	{ event: strings.INTERACTION_EVENT, handler: 'onInteraction' },
	{ event: strings.TRAILING_ICON_INTERACTION_EVENT, handler: 'onTrailingIconInteraction' },
	{ event: strings.REMOVAL_EVENT, handler: 'onRemoval' }
])(ChipSetBase);

export function Chip(props) {
	return (
		<Base
			element="div"
			classes={{ name: 'mdc-chip', modifiers: ['selected', 'exit'] }}
			{...props}
		/>
	);
}

export function ChipText(props) {
	return <Base element="div" classes={{ name: 'mdc-chip__text' }} {...props} />;
}

export function ChipIcon(props) {
	return (
		<Base
			element={Icon}
			classes={{
				name: 'mdc-chip__icon',
				modifiers: ['leading', 'leading-hidden', 'trailing']
			}}
			{...props}
		/>
	);
}

export function ChipCheckmark(props) {
	return (
		<Base element="div" classes={{ name: 'mdc-chip__checkmark' }} {...props}>
			<svg className="mdc-chip__checkmark-svg" viewBox="-2 -3 30 30">
				<path
					element="path"
					className="mdc-chip__checkmark-path"
					fill="none"
					stroke="black"
					d="M1.73,12.91 8.1,19.28 22.79,4.59"
				/>
			</svg>
		</Base>
	);
}
