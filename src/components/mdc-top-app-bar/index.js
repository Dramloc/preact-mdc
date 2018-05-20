import { h, Component } from 'preact';
import { MDCTopAppBar } from '@material/top-app-bar';
import { strings } from '@material/top-app-bar/constants';

import Base from '../mdc-base';
import Icon from '../mdc-icon';

class TopAppBar extends Component {
	onNav = e => {
		if (this.props.onNav) {
			this.props.onNav(e);
		}
	};
	componentDidMount() {
		this.MDCComponent = new MDCTopAppBar(this.__root.base);
		this.MDCComponent.listen(strings.NAVIGATION_EVENT, this.onNav);
	}
	componentWillUnmount() {
		this.MDCComponent.unlisten(strings.NAVIGATION_EVENT, this.onNav);
		this.MDCComponent.destroy();
	}
	render(props) {
		return (
			<Base
				ref={ref => (this.__root = ref)}
				element="header"
				classes={{
					name: 'mdc-top-app-bar',
					modifiers: [
						'short',
						'short-has-action-item',
						'short-collapsed',
						'fixed',
						'fixed-scrolled',
						'prominent',
						'dense'
					]
				}}
				{...props}
			/>
		);
	}
}

function TopAppBarRow(props) {
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

function TopAppBarSection(props) {
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

function TopAppBarTitle(props) {
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

function TopAppBarNavigationIcon(props) {
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

function TopAppBarActionItem(props) {
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

TopAppBar.Row = TopAppBarRow;
TopAppBar.Section = TopAppBarSection;
TopAppBar.Title = TopAppBarTitle;
TopAppBar.NavigationIcon = TopAppBarNavigationIcon;
TopAppBar.ActionItem = TopAppBarActionItem;

export default TopAppBar;
