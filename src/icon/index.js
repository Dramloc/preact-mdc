import { h } from 'preact';

import { Base } from '../base';

export function Icon(props) {
	return <Base element="i" classes={{ name: 'material-icons' }} {...props} />;
}
