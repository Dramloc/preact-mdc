import { h, Component } from 'preact';
import { MDCChipSet } from '@material/chips';

import '@material/chips/chip-set/mdc-chip-set.scss';

import Base from '../mdc-base';

class ChipSet extends Component {
	componentDidMount() {
		this.MDCComponent = new MDCChipSet(this.__root.base);
	}
	componentWillUnmount() {
		this.MDCComponent.destroy();
	}
	render(props) {
		return (
			<Base
				ref={ref => (this.__root = ref)}
				element="div"
				classes={{
					name: 'mdc-chip-set',
					modifiers: ['input', 'choice', 'filter']
				}}
				{...props}
			/>
		);
	}
}

export default ChipSet;
