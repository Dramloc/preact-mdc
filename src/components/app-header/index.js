import { h, Component } from 'preact';

import '@material/top-app-bar/mdc-top-app-bar.scss';

import { withUnboundedSurfaceRipple } from '../mdc-ripple';
import TopAppBar from '../mdc-top-app-bar';

import style from './style.scss';

const RippleNavigationIcon = withUnboundedSurfaceRipple(
	TopAppBar.NavigationIcon
);

class AppHeaderIcon extends Component {
	shouldComponentUpdate() {
		return false;
	}
	render({ toggleDrawer }) {
		return (
			<RippleNavigationIcon onClick={toggleDrawer}>menu</RippleNavigationIcon>
		);
	}
}

export default function AppHeader({ toggleDrawer }) {
	return (
		<TopAppBar className={style['app-header']}>
			<TopAppBar.Row>
				<TopAppBar.Section>
					<AppHeaderIcon toggleDrawer={toggleDrawer} />
					<TopAppBar.Title className={style['app-header__title']}>
						Preact Material Components
					</TopAppBar.Title>
				</TopAppBar.Section>
			</TopAppBar.Row>
		</TopAppBar>
	);
}
