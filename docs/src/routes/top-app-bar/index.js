import { h } from 'preact';

import '@material/icon-button/mdc-icon-button.scss';
import '@material/top-app-bar/mdc-top-app-bar.scss';

import { IconButton } from '../../../../src/icon-button';
import {
	TopAppBar,
	TopAppBarRow,
	TopAppBarSection,
	TopAppBarTitle,
	TopAppBarNavigationIcon,
	TopAppBarActionItem
} from '../../../../src/top-app-bar';
import Showcase from '../../components/showcase';

import style from './style.scss';

function TopAppBarHero() {
	return (
		<Showcase.Demo className={style['hero-top-app-bar']}>
			<TopAppBar modifiers={{ fixed: true }}>
				<TopAppBarRow>
					<TopAppBarSection modifiers={{ 'align-start': true }}>
						<TopAppBarNavigationIcon>menu</TopAppBarNavigationIcon>
						<TopAppBarTitle>San Francisco</TopAppBarTitle>
					</TopAppBarSection>
					<TopAppBarSection modifiers={{ 'align-end': true }}>
						<TopAppBarActionItem>file_download</TopAppBarActionItem>
						<TopAppBarActionItem>print</TopAppBarActionItem>
						<TopAppBarActionItem>bookmark</TopAppBarActionItem>
					</TopAppBarSection>
				</TopAppBarRow>
			</TopAppBar>
		</Showcase.Demo>
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
						<IconButton>open_in_new</IconButton>
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
						<IconButton>open_in_new</IconButton>
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
						<IconButton>open_in_new</IconButton>
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
						<IconButton>open_in_new</IconButton>
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
						<IconButton>open_in_new</IconButton>
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
						<IconButton>open_in_new</IconButton>
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
