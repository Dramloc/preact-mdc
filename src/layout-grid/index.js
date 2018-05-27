import { h } from 'preact';
import cx from 'bem-classnames';

import { Base } from '../base';

cx.prefixes['mdc-layout-grid--span'] = '{name}--span-';
cx.prefixes['mdc-layout-grid--order'] = '{name}--order-';
export function LayoutGrid(props) {
	return (
		<Base
			element="div"
			classes={{
				name: 'mdc-layout-grid',
				modifiers: ['fixed-column-width', 'align-left', 'align-right']
			}}
			{...props}
		/>
	);
}

export function LayoutGridInner(props) {
	return <Base element="div" classes={{ name: 'mdc-layout-grid__inner' }} {...props} />;
}

export function LayoutGridCell(props) {
	return (
		<Base
			element="div"
			classes={{
				name: 'mdc-layout-grid__cell',
				modifiers: ['align-top', 'align-middle', 'align-bottom'],
				'mdc-layout-grid--span': ['span'],
				'mdc-layout-grid--order': ['order']
			}}
			{...props}
		/>
	);
}
