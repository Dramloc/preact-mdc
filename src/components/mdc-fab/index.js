import { h } from 'preact';

import '@material/fab/mdc-fab.scss';

import Base from '../mdc-base';
import Icon from '../mdc-icon';

function Fab(props) {
	return (
		<Base
			element="button"
			classes={{
				name: 'mdc-fab',
				modifiers: ['mini', 'exited']
			}}
			{...props}
		/>
	);
}

function FabIcon(props) {
	return <Base element={Icon} classes={{ name: 'mdc-fab__icon' }} {...props} />;
}

Fab.Icon = FabIcon;
export default Fab;
