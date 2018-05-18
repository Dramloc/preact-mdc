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
export function withSurfaceRipple(Element) {
	return function WithSurfaceRipple({ className, ...props }) {
		const modifiers = ['primary', 'accent'];
		const classes = {
			name: 'mdc-ripple-surface',
			modifiers
		};
		const combinedClassName = cx(classes, props, className);
		modifiers.forEach(modifier => delete props[modifier]);
		const RippledElement = withRipple(Element);
		return <RippledElement className={combinedClassName} {...props} />;
	};
}

export function withUnboundedSurfaceRipple(Element) {
	return function WithUnboundedSurfaceRipple(props) {
		const RippledElement = withSurfaceRipple(Element);
		return <RippledElement data-mdc-ripple-is-unbounded {...props} />;
	};
}
