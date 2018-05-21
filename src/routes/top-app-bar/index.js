import { h } from 'preact';

import '@material/ripple/mdc-ripple.scss';
import '@material/top-app-bar/mdc-top-app-bar.scss';

import { withUnboundedSurfaceRipple } from '../../components/mdc-ripple';
import Icon from '../../components/mdc-icon';
import Showcase from '../../components/showcase';
import TopAppBar from '../../components/mdc-top-app-bar';

import style from './style.scss';

const RippledNavigationIcon = withUnboundedSurfaceRipple(TopAppBar.NavigationIcon);
const RippledActionItem = withUnboundedSurfaceRipple(TopAppBar.ActionItem);
const RippledIcon = withUnboundedSurfaceRipple(Icon);

function TopAppBarHero() {
	return (
		<div className={style['hero-top-app-bar']}>
			<TopAppBar modifiers={{ fixed: true }}>
				<TopAppBar.Row>
					<TopAppBar.Section modifiers={{ 'align-start': true }}>
						<RippledNavigationIcon>menu</RippledNavigationIcon>
						<TopAppBar.Title>San Francisco</TopAppBar.Title>
					</TopAppBar.Section>
					<TopAppBar.Section modifiers={{ 'align-end': true }}>
						<RippledActionItem>file_download</RippledActionItem>
						<RippledActionItem>print</RippledActionItem>
						<RippledActionItem>bookmark</RippledActionItem>
					</TopAppBar.Section>
				</TopAppBar.Row>
			</TopAppBar>
		</div>
	);
}

function TopAppBarDemos() {
	return (
		<div>
			<Showcase.Section>
				<Showcase.Section.Title>
					Standard
					<a
						className={style['top-app-bar-frame-link']}
						href="/top-app-bar/frame"
						target="_blank"
						rel="noopener"
					>
						<RippledIcon>open_in_new</RippledIcon>
					</a>
				</Showcase.Section.Title>
				<iframe className={style['top-app-bar-frame']} src="/top-app-bar/frame" />
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>
					Fixed
					<a
						className={style['top-app-bar-frame-link']}
						href="/top-app-bar/frame/fixed"
						target="_blank"
						rel="noopener"
					>
						<RippledIcon>open_in_new</RippledIcon>
					</a>
				</Showcase.Section.Title>

				<iframe className={style['top-app-bar-frame']} src="/top-app-bar/frame/fixed" />
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>
					Dense
					<a
						className={style['top-app-bar-frame-link']}
						href="/top-app-bar/frame/dense"
						target="_blank"
						rel="noopener"
					>
						<RippledIcon>open_in_new</RippledIcon>
					</a>
				</Showcase.Section.Title>
				<iframe className={style['top-app-bar-frame']} src="/top-app-bar/frame/dense" />
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>
					Prominent
					<a
						className={style['top-app-bar-frame-link']}
						href="/top-app-bar/frame/prominent"
						target="_blank"
						rel="noopener"
					>
						<RippledIcon>open_in_new</RippledIcon>
					</a>
				</Showcase.Section.Title>
				<iframe className={style['top-app-bar-frame']} src="/top-app-bar/frame/prominent" />
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>
					Short
					<a
						className={style['top-app-bar-frame-link']}
						href="/top-app-bar/frame/short"
						target="_blank"
						rel="noopener"
					>
						<RippledIcon>open_in_new</RippledIcon>
					</a>
				</Showcase.Section.Title>
				<iframe className={style['top-app-bar-frame']} src="/top-app-bar/frame/short" />
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>
					Short - Always Collapsed
					<a
						className={style['top-app-bar-frame-link']}
						href="/top-app-bar/frame/short-collapsed"
						target="_blank"
						rel="noopener"
					>
						<RippledIcon>open_in_new</RippledIcon>
					</a>
				</Showcase.Section.Title>
				<iframe className={style['top-app-bar-frame']} src="/top-app-bar/frame/short-collapsed" />
			</Showcase.Section>
		</div>
	);
}

export default function TopAppBarShowcase() {
	return (
		<Showcase
			title="Top App Bar"
			description="Top App Bars are a container for items such as application title, navigation icon, and action items."
			hero={<TopAppBarHero />}
			guidelinesLink="https://material.io/design/components/app-bars-top.html"
			documentationLink="https://material.io/develop/web/components/top-app-bar/"
			sourceCodeLink="https://github.com/material-components/material-components-web/tree/master/packages/mdc-top-app-bar"
			demoLink="https://material-components.github.io/material-components-web-catalog/#/component/top-app-bar"
			demos={<TopAppBarDemos />}
		/>
	);
}
