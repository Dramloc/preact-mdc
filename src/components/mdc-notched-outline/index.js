import { h } from 'preact';
import { MDCNotchedOutline } from '@material/notched-outline';

import { withMaterialComponent } from '../with-material-component';

export function NocthedOutlineBase() {
	return (
		<div>
			<div class="mdc-notched-outline">
				<svg>
					<path class="mdc-notched-outline__path" />
				</svg>
			</div>
			<div class="mdc-notched-outline__idle" />
		</div>
	);
}

export const NotchedOutline = withMaterialComponent(NocthedOutlineBase, MDCNotchedOutline);
