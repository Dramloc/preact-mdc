import { h } from 'preact';
import { TopAppBar, TopAppBarNavigationIcon, TopAppBarRow, TopAppBarSection, TopAppBarTitle } from '../../../../src/top-app-bar';

import '@material/top-app-bar/mdc-top-app-bar.scss';

import { withDisabledUpdates } from '../with-disabled-updates';

import style from './style.scss';

const AppHeaderIcon = withDisabledUpdates(TopAppBarNavigationIcon);

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
