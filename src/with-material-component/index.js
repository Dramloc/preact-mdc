import { h, Component } from 'preact';

import { getDisplayName } from '../get-display-name';

export function withMaterialComponent(MDCComponent, listeners = [], bindings = []) {
	return Element => {
		class WithMaterialComponent extends Component {
			constructor() {
				super();
				listeners.forEach(listener => {
					this[listener.handler] = e => {
						if (this.props[listener.handler]) {
							this.props[listener.handler](e);
						}
					};
				});
			}
			componentDidMount() {
				this.MDCComponent = new MDCComponent(this.__root.base);
				synchronizeBindings(bindings, this.MDCComponent, this.props);
				listeners.forEach(listener => {
					this.MDCComponent.listen(listener.event, this[listener.handler]);
				});
			}
			componentWillReceiveProps(nextProps) {
				setBindings(bindings, this.MDCComponent, this.props, nextProps);
			}
			shouldComponentUpdate(nextProps) {
				return bindings.some(binding => this.props[binding] !== nextProps[binding]);
			}
			componentWillUnmount() {
				listeners.forEach(listener => {
					this.MDCComponent.unlisten(listener.event, this[listener.handler]);
				});
				this.MDCComponent.destroy();
			}
			render(props) {
				const filteredProps = { ...props };
				bindings.forEach(binding => {
					delete filteredProps[binding];
				});
				return <Element ref={ref => (this.__root = ref)} {...filteredProps} />;
			}
		}
		if (process.env.NODE_ENV !== 'production') {
			WithMaterialComponent.displayName = `WithMaterialComponent(${getDisplayName(Element)})`;
		}
		return WithMaterialComponent;
	};
}

function synchronizeBindings(bindings, MDCComponent, props, nextProps) {
	bindings.forEach(binding => {
		if (MDCComponent[binding] !== props[binding] && props[binding] !== undefined) {
			MDCComponent[binding] = props[binding];
		}
	});
}

function setBindings(bindings, MDCComponent, props, nextProps) {
	synchronizeBindings(bindings, MDCComponent, props);
	bindings.forEach(binding => {
		if (props[binding] !== nextProps[binding] && nextProps[binding] !== undefined) {
			MDCComponent[binding] = nextProps[binding];
		}
	});
}
