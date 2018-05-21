import { h, Component } from 'preact';

export function withMaterialComponent(Element, MDCComponent) {
	return class MaterialComponent extends Component {
		componentDidMount() {
			this.MDCComponent = new MDCComponent(this.__root.base);
		}
		componentWillUnmount() {
			this.MDCComponent.destroy();
		}
		render(props) {
			return <Element ref={ref => (this.__root = ref)} {...props} />;
		}
	};
}
