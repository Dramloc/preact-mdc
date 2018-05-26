import { h } from 'preact';
import { MDCTabBar, MDCTabBarScroller } from '@material/tabs';
import { strings } from '@material/tabs/tab-bar/constants';

import { Base } from '../mdc-base';
import { Icon } from '../mdc-icon';
import { withMaterialComponent } from '../with-material-component';

export function TabBarBase({ children, ...props }) {
	return (
		<Base
			element="nav"
			classes={{ name: 'mdc-tab-bar', modifiers: ['icons-with-text'] }}
			{...props}
		>
			{children}
			<div className="mdc-tab-bar__indicator" />
		</Base>
	);
}

export const TabBar = withMaterialComponent(
	TabBarBase,
	MDCTabBar,
	[{ event: strings.CHANGE_EVENT, handler: 'onChange' }],
	['activeTab', 'activeTabIndex']
);

export function Tab(props) {
	return <Base element="a" classes={{ name: 'mdc-tab', modifiers: ['active'] }} {...props} />;
}

export function TabIcon(props) {
	return <Base element={Icon} classes={{ name: 'mdc-tab__icon' }} {...props} />;
}

export function TabIconText(props) {
	return <Base element="span" classes={{ name: 'mdc-tab__icon-text' }} {...props} />;
}

function TabBarScrollerIndicator(props) {
	return (
		<Base
			element="div"
			classes={{ name: 'mdc-tab-bar-scroller__indicator', modifiers: ['back', 'forward'] }}
			{...props}
		/>
	);
}

function TabBarScrollerIndicatorInner(props) {
	return (
		<a className="mdc-tab-bar-scroller__indicator__inner material-icons" href="#" {...props} />
	);
}

export function TabBarScrollerBase({
	children,
	backIcon = (
		<TabBarScrollerIndicatorInner aria-label="scroll back button">
			navigate_before
		</TabBarScrollerIndicatorInner>
	),
	forwardIcon = (
		<TabBarScrollerIndicatorInner aria-label="scroll forward button">
			navigate_next
		</TabBarScrollerIndicatorInner>
	),
	...props
}) {
	return (
		<Base element="div" classes={{ name: 'mdc-tab-bar-scroller' }} {...props}>
			<TabBarScrollerIndicator modifiers={{ back: true }}>{backIcon}</TabBarScrollerIndicator>
			<div class="mdc-tab-bar-scroller__scroll-frame">
				<TabBarBase className="mdc-tab-bar-scroller__scroll-frame__tabs">{children}</TabBarBase>
			</div>
			<TabBarScrollerIndicator modifiers={{ forward: true }}>{forwardIcon}</TabBarScrollerIndicator>
		</Base>
	);
}

export const TabBarScroller = withMaterialComponent(TabBarScrollerBase, MDCTabBarScroller);
