import { h, Component } from 'preact';
import { Router } from 'preact-router';
import cx from 'classnames';

import AppDrawer from '../app-drawer';
import AppHeader from '../app-header';
import ButtonShowcase from '../../routes/button';
import CardShowcase from '../../routes/card';
import ChipsShowcase from '../../routes/chips';
import DialogShowcase from '../../routes/dialog';
import DrawerShowcase from '../../routes/drawer';
import FabShowcase from '../../routes/fab';
import IconToggleShowcase from '../../routes/icon-toggle';
import ListShowcase from '../../routes/list';
import RippleShowcase from '../../routes/ripple';
import TopAppBarShowcase from '../../routes/top-app-bar';

import style from './style.scss';

export default class AppLayout extends Component {
	state = {
		isDrawerOpen: false
	};

	toggleDrawer = () => {
		this.setState({ isDrawerOpen: !this.state.isDrawerOpen });
	};

	handleOpen = drawerWidth => {
		this.animate(-drawerWidth, 'open');
	};

	handleClose = drawerWidth => {
		this.animate(drawerWidth, 'close');
	};

	animate(drawerWidth, stateName) {
		if (!this.content) return;
		this.content.style.setProperty(
			'transform',
			`translateX(${drawerWidth / 2}px)`
		);

		const className = style[`app-layout__content--animating-${stateName}`];
		this.content.getBoundingClientRect();
		requestAnimationFrame(() => {
			this.content.classList.add(className);
			this.content.style.setProperty('transform', '');
		});
		const delay = stateName === 'open' ? 250 : 125;
		setTimeout(() => this.content.classList.remove(className), delay);
	}

	render(_, { isDrawerOpen }) {
		return (
			<div>
				<AppHeader toggleDrawer={this.toggleDrawer} />
				<div
					className={cx(
						style['app-layout__main'],
						'mdc-top-app-bar--fixed-adjust'
					)}
				>
					<AppDrawer
						isDrawerOpen={isDrawerOpen}
						handleOpen={this.handleOpen}
						handleClose={this.handleClose}
					/>
					<main
						ref={ref => {
							this.content = ref;
						}}
						className={style['app-layout__content']}
					>
						<Router>
							<ButtonShowcase path="/button" />
							<CardShowcase path="/card" />
							<ChipsShowcase path="/chips" />
							<DialogShowcase path="/dialog" />
							<DrawerShowcase path="/drawer" />
							<FabShowcase path="/fab" />
							<IconToggleShowcase path="/icon-toggle" />
							<ListShowcase path="/list" />
							<RippleShowcase path="/ripple" />
							<TopAppBarShowcase path="/top-app-bar" />
						</Router>
					</main>
				</div>
			</div>
		);
	}
}
