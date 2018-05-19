import { h } from 'preact';

import '@material/chips/chip/mdc-chip.scss';

import Base from '../mdc-base';
import Icon from '../mdc-icon';

function Chip(props) {
	return (
		<Base
			element="div"
			classes={{ name: 'mdc-chip', modifiers: ['selected', 'exit'] }}
			{...props}
		/>
	);
}

function ChipText(props) {
	return <Base element="div" classes={{ name: 'mdc-chip__text' }} {...props} />;
}

function ChipIcon(props) {
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

function ChipCheckmark(props) {
	return (
		<Base
			element="div"
			classes={{ name: 'mdc-chip__checkmark' }}
			{...props}
			children={
				<svg className="mdc-chip__checkmark-svg" viewBox="-2 -3 30 30">
					<path
						element="path"
						className="mdc-chip__checkmark-path"
						fill="none"
						stroke="black"
						d="M1.73,12.91 8.1,19.28 22.79,4.59"
					/>
				</svg>
			}
		/>
	);
}

Chip.Text = ChipText;
Chip.Icon = ChipIcon;
Chip.Checkmark = ChipCheckmark;

export default Chip;
