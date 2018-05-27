import { h } from 'preact';
import cx from 'bem-classnames';

import { Base } from '../base';
import { withMaterialClasses } from '../with-material-classes';

cx.prefixes['mdc-elevation--z'] = '{name}--z';
export function Elevation(props) {
	return (
		<Base element="div" classes={{ name: 'mdc-elevation', 'mdc-elevation--z': ['z'] }} {...props} />
	);
}

export const withElevationTransition = withMaterialClasses({ name: 'mdc-elevation-transition' });
