import { h } from 'preact';

import '@material/ripple/mdc-ripple.scss';
import '@material/top-app-bar/mdc-top-app-bar.scss';

import {
	TopAppBar,
	TopAppBarNavigationIcon,
	TopAppBarActionItem,
	TopAppBarRow,
	TopAppBarSection,
	TopAppBarTitle
} from '../../components/mdc-top-app-bar';
import { withUnboundedSurfaceRipple } from '../../components/mdc-ripple';
import Showcase from '../../components/showcase';

const RippledNavigationIcon = withUnboundedSurfaceRipple(TopAppBarNavigationIcon);
const RippledActionItem = withUnboundedSurfaceRipple(TopAppBarActionItem);

export default function TopAppBarFrame({ variant }) {
	const modifiers = { [variant]: true };
	if (variant === 'short-collapsed') {
		modifiers.short = true;
	}
	let adjustClassName = 'mdc-top-app-bar--fixed-adjust';
	switch (variant) {
		case 'dense':
			adjustClassName = 'mdc-top-app-bar--dense-fixed-adjust';
			break;
		case 'prominent':
			adjustClassName = 'mdc-top-app-bar--prominent-fixed-adjust';
			break;
		case 'short':
		case 'short-collapsed':
			adjustClassName = 'mdc-top-app-bar--short-fixed-adjust';
			break;
	}
	return (
		<Showcase.Frame>
			<TopAppBar modifiers={modifiers}>
				<TopAppBarRow>
					<TopAppBarSection modifiers={{ 'align-start': true }}>
						<RippledNavigationIcon>menu</RippledNavigationIcon>
						<TopAppBarTitle>San Francisco</TopAppBarTitle>
					</TopAppBarSection>
					<TopAppBarSection modifiers={{ 'align-end': true }}>
						<RippledActionItem>file_download</RippledActionItem>
						{modifiers.short !== true && <RippledActionItem>print</RippledActionItem>}
						{modifiers.short !== true && <RippledActionItem>bookmark</RippledActionItem>}
					</TopAppBarSection>
				</TopAppBarRow>
			</TopAppBar>
			<main className={adjustClassName}>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
					sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
					est laborum.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
					sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
					est laborum.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
					sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
					est laborum.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
					sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
					est laborum.
				</p>
			</main>
		</Showcase.Frame>
	);
}
