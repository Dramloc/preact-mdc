import { h, Component } from 'preact';
import { MDCIconToggle } from '@material/icon-toggle';
import { strings } from '@material/icon-toggle/constants';
import cx from 'bem-classnames';

class IconToggle extends Component {
	onChange = e => {
		if (this.props.onChange) {
			this.props.onChange(e);
		}
	};
	componentDidMount() {
		this.MDCComponent = new MDCIconToggle(this.__root);
		this.MDCComponent.listen(strings.CHANGE_EVENT, this.onChange);
	}
	componentWillUnmount() {
		this.MDCComponent.unlisten(strings.CHANGE_EVENT, this.onChange);
		this.MDCComponent.destroy();
	}
	render({ className, children, ...props }) {
		if (props['data-toggle-on']) {
			props['data-toggle-on'] = JSON.stringify(props['data-toggle-on']);
		}
		if (props['data-toggle-off']) {
			props['data-toggle-off'] = JSON.stringify(props['data-toggle-off']);
		}
		const classes = {
			name: 'mdc-icon-toggle'
		};
		return (
			<i
				ref={ref => (this.__root = ref)}
				className={cx(classes, props, 'material-icons', className)}
				role="button"
				{...props}
			>
				{children}
			</i>
		);
	}
}

export default IconToggle;
