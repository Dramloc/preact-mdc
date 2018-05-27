import { h } from 'preact';

import { Base } from '../base';

export function Typography(props) {
	return (
		<Base
			element="span"
			classes={{
				name: 'mdc-typography',
				modifiers: [
					'headline1',
					'headline2',
					'headline3',
					'headline4',
					'headline5',
					'headline6',
					'subtitle1',
					'subtitle2',
					'body1',
					'body2',
					'caption',
					'button',
					'overline'
				]
			}}
			{...props}
		/>
	);
}
