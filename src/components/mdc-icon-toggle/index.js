import { h, Component } from 'preact';
import { MDCIconToggle } from '@material/icon-toggle';
import { strings } from '@material/icon-toggle/constants';

import { Base } from '../mdc-base';
import { Icon } from '../mdc-icon';

// FIXME: replace with higher order components
export class IconToggle extends Component {
	onChange = e => {
		if (this.props.onChange) {
			this.props.onChange(e);
		}
	};
	componentDidMount() {
		this.MDCComponent = new MDCIconToggle(this.__root.base);
		this.MDCComponent.listen(strings.CHANGE_EVENT, this.onChange);
	}
	componentWillUnmount() {
		this.MDCComponent.unlisten(strings.CHANGE_EVENT, this.onChange);
		this.MDCComponent.destroy();
	}
	render(props) {
		if (props['data-toggle-on']) {
			props['data-toggle-on'] = JSON.stringify(props['data-toggle-on']);
		}
		if (props['data-toggle-off']) {
			props['data-toggle-off'] = JSON.stringify(props['data-toggle-off']);
		}
		return (
			<Base
				element={Icon}
				classes={{
					name: 'mdc-icon-toggle'
				}}
				ref={ref => (this.__root = ref)}
				role="button"
				tabindex="0"
				{...props}
			/>
		);
	}
}
