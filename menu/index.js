import { h } from 'preact';
import { MDCMenu } from '@material/menu';
import { strings } from '@material/menu/constants';

import { Base } from '../base';
import { List, ListItem } from '../list';
import { withDefaultProps } from '../with-default-props';
import { withMaterialClasses } from '../with-material-classes';
import { withMaterialComponent } from '../with-material-component';

export function MenuBase(props) {
	return (
		<Base
			element="div"
			classes={{ name: 'mdc-menu', modifiers: ['open'] }}
			tabindex="-1"
			{...props}
		/>
	);
}

export const Menu = withMaterialComponent(
	MenuBase,
	MDCMenu,
	[
		{ event: strings.SELECTED_EVENT, handler: 'onSelected' },
		{ event: strings.CANCEL_EVENT, handler: 'onCancel' }
	],
	['open']
);

export const MenuItems = withDefaultProps(withMaterialClasses(List, { name: 'mdc-menu__items' }), {
	role: 'menu',
	'aria-hidden': true
});

export const MenuItem = withDefaultProps(ListItem, { role: 'menuitem', tabindex: '0' });

export function withMenuAnchor(Element) {
	return withMaterialClasses(Element, { name: 'mdc-menu-anchor' });
}

export const MenuAnchor = withMenuAnchor('div');
