import { h } from 'preact';

import '@material/elevation/mdc-elevation.scss';

import { Base } from '../mdc-base';
import { withMaterialClasses } from '../with-material-classes';

const modifiers = [];
for (let elevationIndex = 0; elevationIndex <= 24; elevationIndex += 1) {
	modifiers.push(`z${elevationIndex}`);
}

export function Elevation(props) {
	return <Base element="div" classes={{ name: 'mdc-elevation', modifiers }} {...props} />;
}

export function withElevationTransition(Element) {
	return withMaterialClasses(Element, { name: 'mdc-elevation-transition' });
}
