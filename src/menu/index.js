import { h } from 'preact';
import { MDCMenu } from '@material/menu';
import { strings } from '@material/menu/constants';

import { Base } from '../base';
import { compose } from '../compose';
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
	MDCMenu,
	[
		{ event: strings.SELECTED_EVENT, handler: 'onSelected' },
		{ event: strings.CANCEL_EVENT, handler: 'onCancel' }
	],
	['open']
)(MenuBase);

export const MenuItems = compose(
	withDefaultProps({ role: 'menu', 'aria-hidden': true }),
	withMaterialClasses({ name: 'mdc-menu__items' })
)(List);

export const MenuItem = withDefaultProps({ role: 'menuitem', tabindex: '0' })(ListItem);

export const withMenuAnchor = withMaterialClasses({ name: 'mdc-menu-anchor' });

export const MenuAnchor = withMenuAnchor('div');
