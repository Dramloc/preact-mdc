import { h, Component } from 'preact';
import { MDCRipple } from '@material/ripple';
import cx from 'bem-classnames';

/**
 * Initializes MDCRipple on element
 */
export function withRipple(Element) {
	return class WithRipple extends Component {
		componentDidMount() {
			this.MDCComponent = new MDCRipple(this.__root.base);
		}
		componentWillUnmount() {
			this.MDCComponent.destroy();
		}
		render(props) {
			return <Element ref={ref => (this.__root = ref)} {...props} />;
		}
	};
}

/**
 * Initializes MDCRipple on element and add mdc-ripple-surface classes
 */
export function withSurfaceRipple(Element) {
	return function WithSurfaceRipple({ className, ...props }) {
		const classes = {
			name: 'mdc-ripple-surface',
			modifiers: ['primary', 'accent']
		};
		const RippledElement = withRipple(Element);
		return (
			<RippledElement
				className={cx(classes, props.modifiers, className)}
				{...props}
			/>
		);
	};
}

/**
 * Initializes MDCRipple on element,
 * add mdc-ripple-surface classes
 * and data-mdc-ripple-is-unbounded attribute
 */
export function withUnboundedSurfaceRipple(Element) {
	return function WithUnboundedSurfaceRipple(props) {
		const RippledElement = withSurfaceRipple(Element);
		return <RippledElement data-mdc-ripple-is-unbounded {...props} />;
	};
}
