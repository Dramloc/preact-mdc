import { h } from 'preact';
import { MDCLinearProgress } from '@material/linear-progress';

import { Base } from '../mdc-base';
import { withMaterialComponent } from '../with-material-component';

export function LinearProgressBase(props) {
	return (
		<Base
			element="div"
			classes={{ name: 'mdc-linear-progress', modifiers: ['indeterminate', 'reversed', 'closed'] }}
			role="progressbar"
			{...props}
		>
			<div className="mdc-linear-progress__buffering-dots" />
			<div className="mdc-linear-progress__buffer" />
			<div className="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
				<span className="mdc-linear-progress__bar-inner" />
			</div>
			<div className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
				<span className="mdc-linear-progress__bar-inner" />
			</div>
		</Base>
	);
}

export const LinearProgress = withMaterialComponent(
	LinearProgressBase,
	MDCLinearProgress,
	[],
	['determinate', 'progress', 'buffer', 'reverse']
);
