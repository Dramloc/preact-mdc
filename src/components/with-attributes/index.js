import { h } from 'preact';

export function withAttributes(Element, attributes) {
	return function Attributes(props) {
		return <Element {...attributes} {...props} />;
	};
}
