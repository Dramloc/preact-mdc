import { h, Component } from 'preact';
import { MDCRipple } from '@material/ripple';
import cx from 'bem-classnames';

/**
 * Higher order component, initializes MDCRipple on element
 */
export function withRipple(Element) {
	return class WithRipple extends Component {
		componentDidMount() {
			this.MDCComponent = new MDCRipple(this.__root.base);
		}
		componentWillUnmount() {
			this.MDCComponent.destroy();
		}
		render({ ...props }) {
			return <Element ref={ref => (this.__root = ref)} {...props} />;
		}
	};
}

/**
 * Higher order component, initializes MDCRipple on element and add mdc-ripple-surface classes to element
 */
export function withRippleSurface(Element) {
	return function WithRippleSurface({ className, ...props }) {
		const classes = {
			name: 'mdc-ripple-surface',
			modifiers: ['primary', 'accent']
		};
		const RippledElement = withRipple(Element);
		return (
			<RippledElement className={cx(classes, props, className)} {...props} />
		);
	};
}
