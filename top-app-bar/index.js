import { h } from 'preact';
import { MDCTopAppBar } from '@material/top-app-bar';
import { strings } from '@material/top-app-bar/constants';

import { Base } from '../base';
import { Icon } from '../icon';
import { withMaterialComponent } from '../with-material-component';
import { withUnboundedSurfaceRipple } from '../ripple';

export function TopAppBarBase(props) {
	return (
		<Base
			element="header"
			classes={{
				name: 'mdc-top-app-bar',
				modifiers: ['short', 'short-collapsed', 'short-has-action-item', 'fixed', 'prominent', 'dense']
			}}
			{...props}
		/>
	);
}

export const TopAppBar = withMaterialComponent(TopAppBarBase, MDCTopAppBar, [
	{ event: strings.NAVIGATION_EVENT, handler: 'onNav' }
]);

export function TopAppBarRow(props) {
	return (
		<Base
			element="div"
			classes={{
				name: 'mdc-top-app-bar__row'
			}}
			{...props}
		/>
	);
}

export function TopAppBarSection(props) {
	return (
		<Base
			element="section"
			classes={{
				name: 'mdc-top-app-bar__section',
				modifiers: ['align-start', 'align-end']
			}}
			{...props}
		/>
	);
}

export function TopAppBarTitle(props) {
	return (
		<Base
			element="span"
			classes={{
				name: 'mdc-top-app-bar__title'
			}}
			{...props}
		/>
	);
}

export function TopAppBarNavigationIconBase(props) {
	return (
		<Base
			element={Icon}
			classes={{
				name: 'mdc-top-app-bar__navigation-icon'
			}}
			role="button"
			tabindex="0"
			{...props}
		/>
	);
}

export const TopAppBarNavigationIcon = withUnboundedSurfaceRipple(TopAppBarNavigationIconBase);

export function TopAppBarActionItemBase(props) {
	return (
		<Base
			element={Icon}
			classes={{
				name: 'mdc-top-app-bar__action-item'
			}}
			role="button"
			tabindex="0"
			{...props}
		/>
	);
}

export const TopAppBarActionItem = withUnboundedSurfaceRipple(TopAppBarNavigationIconBase);
