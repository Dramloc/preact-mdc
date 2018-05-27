import { h } from 'preact';

export function withDefaultProps(defaultProps) {
	return Element => function DefaultProps(props) {
		return <Element {...{ ...defaultProps, ...props }} />;
	};
}
