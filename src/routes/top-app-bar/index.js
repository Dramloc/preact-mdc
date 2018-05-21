import { h } from 'preact';

import '@material/ripple/mdc-ripple.scss';
import '@material/top-app-bar/mdc-top-app-bar.scss';

import { Icon } from '../../components/mdc-icon';
import {
	TopAppBar,
	TopAppBarRow,
	TopAppBarSection,
	TopAppBarTitle,
	TopAppBarNavigationIcon,
	TopAppBarActionItem
} from '../../components/mdc-top-app-bar';
import { withUnboundedSurfaceRipple } from '../../components/mdc-ripple';
import Showcase from '../../components/showcase';

import style from './style.scss';

const RippledNavigationIcon = withUnboundedSurfaceRipple(TopAppBarNavigationIcon);
const RippledActionItem = withUnboundedSurfaceRipple(TopAppBarActionItem);
const RippledIcon = withUnboundedSurfaceRipple(Icon);

function TopAppBarHero() {
	return (
		<div className={style['hero-top-app-bar']}>
			<TopAppBar modifiers={{ fixed: true }}>
				<TopAppBarRow>
					<TopAppBarSection modifiers={{ 'align-start': true }}>
						<RippledNavigationIcon>menu</RippledNavigationIcon>
						<TopAppBarTitle>San Francisco</TopAppBarTitle>
					</TopAppBarSection>
					<TopAppBarSection modifiers={{ 'align-end': true }}>
						<RippledActionItem>file_download</RippledActionItem>
						<RippledActionItem>print</RippledActionItem>
						<RippledActionItem>bookmark</RippledActionItem>
					</TopAppBarSection>
				</TopAppBarRow>
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
