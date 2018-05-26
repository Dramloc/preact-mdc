import { h } from 'preact';

import { Base } from '../base';
import { Icon } from '../icon';
import { withRipple } from '../ripple';

export function List(props) {
	return (
		<Base
			element="ul"
			classes={{
				name: 'mdc-list',
				modifiers: ['two-line', 'dense', 'avatar-list']
			}}
			role="list"
			{...props}
		/>
	);
}

export function ListItemBase(props) {
	return (
		<Base
			element="li"
			classes={{
				name: 'mdc-list-item',
				modifiers: ['selected', 'activated']
			}}
			role="listitem"
			{...props}
		/>
	);
}

export const ListItem = withRipple(ListItemBase);

export function ListItemText(props) {
	return (
		<Base
			element="span"
			classes={{
				name: 'mdc-list-item__text'
			}}
			{...props}
		/>
	);
}

export function ListItemGraphic(props) {
	return (
		<Base
			element={Icon}
			classes={{
				name: 'mdc-list-item__graphic'
			}}
			{...props}
		/>
	);
}

export function ListItemMeta(props) {
	return (
		<Base
			element={Icon}
			classes={{
				name: 'mdc-list-item__meta'
			}}
			{...props}
		/>
	);
}

export function ListItemSecondaryText(props) {
	return (
		<Base
			element="span"
			classes={{
				name: 'mdc-list-item__secondary-text'
			}}
			{...props}
		/>
	);
}

export function ListGroup(props) {
	return (
		<Base
			element="div"
			classes={{
				name: 'mdc-list-group'
			}}
			{...props}
		/>
	);
}

export function ListGroupSubheader(props) {
	return (
		<Base
			element="h3"
			classes={{
				name: 'mdc-list-group__subheader'
			}}
			{...props}
		/>
	);
}

export function ListDivider(props) {
	return (
		<Base
			element="li"
			classes={{
				name: 'mdc-list-divider',
				modifiers: ['padded', 'inset']
			}}
			role="separator"
			{...props}
		/>
	);
}
