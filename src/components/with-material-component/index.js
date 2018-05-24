import { h, Component } from 'preact';

export function withMaterialComponent(Element, MDCComponent, listeners = [], bindings = []) {
	return class MaterialComponent extends Component {
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
			listeners.forEach(listener => {
				this.MDCComponent.listen(listener.event, this[listener.handler]);
			});
		}
		componentWillReceiveProps(nextProps) {
			bindings.forEach(binding => {
				if (this.props[binding] !== nextProps[binding]) {
					this.MDCComponent[binding] = nextProps[binding];
				}
			});
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
	};
}
