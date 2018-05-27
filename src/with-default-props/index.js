import { h } from 'preact';

import { getDisplayName } from '../get-display-name';

export function withDefaultProps(defaultProps) {
	return Element => {
		function WithDefaultProps(props) {
			return <Element {...{ ...defaultProps, ...props }} />;
		}
		if (process.env.NODE_ENV !== 'production') {
			WithDefaultProps.displayName = `WithDefaultProps(${getDisplayName(Element)})`;
		}
		return WithDefaultProps;
	};
}
