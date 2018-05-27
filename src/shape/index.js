import { h } from 'preact';

import { Base } from '../base';

export function ShapeContainer(props) {
	return <Base element="div" classes={{ name: 'mdc-shape-container' }} {...props} />;
}

export function ShapeContainerCorner(props) {
	return (
		<Base
			element="div"
			classes={{
				name: 'mdc-shape-container__corner',
				modifiers: ['top-left', 'top-right', 'bottom-right', 'bottom-left']
			}}
			{...props}
		/>
	);
}
