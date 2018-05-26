import { h, Component } from 'preact';

export function withDisabledUpdates(Element) {
	return class DisabledUpdates extends Component {
		shouldComponentUpdate() {
			return false;
		}
		render(props) {
			return <Element {...props} />;
		}
	};
}
