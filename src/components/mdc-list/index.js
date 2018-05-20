import { h } from 'preact';

import Base from '../mdc-base';
import Icon from '../mdc-icon';

function List(props) {
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

function ListItem(props) {
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

function ListItemText(props) {
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

function ListItemGraphic(props) {
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

function ListItemMeta(props) {
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

function ListItemSecondaryText(props) {
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

function ListGroup(props) {
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

function ListGroupSubheader(props) {
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

function ListDivider(props) {
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

List.Item = ListItem;
List.Item.Text = ListItemText;
List.Item.SecondaryText = ListItemSecondaryText;
List.Item.Graphic = ListItemGraphic;
List.Item.Meta = ListItemMeta;
List.Group = ListGroup;
List.Group.Subheader = ListGroupSubheader;
List.Divider = ListDivider;

export default List;
