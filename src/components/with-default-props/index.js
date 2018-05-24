import { h } from 'preact';

export function withDefaultProps(Element, defaultProps) {
	return function Attributes(props) {
		return <Element {...{ ...defaultProps, ...props }} />;
	};
}
