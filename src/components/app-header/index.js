import { h } from 'preact';

import '@material/top-app-bar/mdc-top-app-bar.scss';

import {
	TopAppBar,
	TopAppBarNavigationIcon,
	TopAppBarRow,
	TopAppBarSection,
	TopAppBarTitle
} from '../mdc-top-app-bar';
import { withDisabledUpdates } from '../with-disabled-updates';
import { withUnboundedSurfaceRipple } from '../mdc-ripple';

import style from './style.scss';

const AppHeaderIcon = withDisabledUpdates(withUnboundedSurfaceRipple(TopAppBarNavigationIcon));

export default function AppHeader({ toggleDrawer }) {
	return (
		<TopAppBar className={style['app-header']}>
			<TopAppBarRow>
				<TopAppBarSection>
					<AppHeaderIcon onClick={toggleDrawer}>menu</AppHeaderIcon>
					<TopAppBarTitle className={style['app-header__title']}>
						Preact Material Components
					</TopAppBarTitle>
				</TopAppBarSection>
			</TopAppBarRow>
		</TopAppBar>
	);
}
