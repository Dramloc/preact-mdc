import { h } from 'preact';
import { TopAppBar, TopAppBarNavigationIcon, TopAppBarActionItem, TopAppBarRow, TopAppBarSection, TopAppBarTitle } from '../../../../src/top-app-bar';

import '@material/top-app-bar/mdc-top-app-bar.scss';

import Showcase from '../../components/showcase';

export default function TopAppBarFrame({ variant }) {
	const modifiers = { [variant]: true };
	if (modifiers['short-collapsed']) {
		modifiers.short = true;
	}
	if (modifiers.short) {
		modifiers['short-has-action-item'] = true;
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
						<TopAppBarNavigationIcon>menu</TopAppBarNavigationIcon>
						<TopAppBarTitle>San Francisco</TopAppBarTitle>
					</TopAppBarSection>
					<TopAppBarSection modifiers={{ 'align-end': true }}>
						<TopAppBarActionItem>file_download</TopAppBarActionItem>
						{modifiers.short !== true && <TopAppBarActionItem>print</TopAppBarActionItem>}
						{modifiers.short !== true && <TopAppBarActionItem>bookmark</TopAppBarActionItem>}
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
