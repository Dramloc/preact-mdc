import { h } from 'preact';
import { MDCNotchedOutline } from '@material/notched-outline';

import { withMaterialComponent } from '../with-material-component';

export function NotchedOutlineBase() {
	return (
		<div className="mdc-notched-outline">
			<svg>
				<path className="mdc-notched-outline__path" />
			</svg>
		</div>
	);
}

export function NotchedOutlineIdle() {
	return <div className="mdc-notched-outline__idle" />;
}

export function NotchedOutlineFull() {
	return (
		<div>
			<NotchedOutlineBase />
			<NotchedOutlineIdle />
		</div>
	);
}

export const NotchedOutline = withMaterialComponent(MDCNotchedOutline)(NotchedOutlineBase);
