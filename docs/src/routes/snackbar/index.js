import { Button } from '@preact/mdc/button';
import { h, Component } from 'preact';

import '@material/button/mdc-button.scss';
import '@material/snackbar/mdc-snackbar.scss';

import {
	SnackbarBase,
	SnackbarText,
	SnackbarActionWrapper,
	SnackbarActionButton,
	Snackbar
} from '@preact/mdc/snackbar';
import Showcase from '../../components/showcase';

import style from './style.scss';

function SnackbarHero() {
	return (
		<div>
			<SnackbarBase className={style['hero-snackbar']} modifiers={{ active: true }}>
				<SnackbarText>Message Sent</SnackbarText>
				<SnackbarActionWrapper>
					<SnackbarActionButton>Undo</SnackbarActionButton>
				</SnackbarActionWrapper>
			</SnackbarBase>
		</div>
	);
}

class SnackbarDemo extends Component {
	showSnackbar = () => {
		this.snackbar.MDCComponent.show({
			message: this.props.message || 'Message Sent',
			actionHandler: () => {},
			actionText: 'Undo'
		});
	};
	render({ modifiers }) {
		return (
			<div>
				<Button onClick={this.showSnackbar}>Show Snackbar</Button>
				<Snackbar ref={ref => (this.snackbar = ref)} modifiers={modifiers}>
					<SnackbarText />
					<SnackbarActionWrapper>
						<SnackbarActionButton />
					</SnackbarActionWrapper>
				</Snackbar>
			</div>
		);
	}
}

function SnackbarDemos() {
	return (
		<div>
			<Showcase.Section>
				<Showcase.Section.Title>Snackbar</Showcase.Section.Title>
				<SnackbarDemo />
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Snackbar Start Aligned</Showcase.Section.Title>
				<SnackbarDemo modifiers={{ 'align-start': true }} />
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Snackbar with Action on Bottom</Showcase.Section.Title>
				<SnackbarDemo modifiers={{ 'action-on-bottom': true }} />
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Multiline Snackbar</Showcase.Section.Title>
				<SnackbarDemo modifiers={{ multiline: true }} message="This is a longer message, it will be displayed on multiple lines" />
			</Showcase.Section>
		</div>
	);
}

export default function SnackbarShowcase() {
	return (
		<Showcase
			title="Snackbar"
			description="Snackbars provide brief feedback about an operation through a message at the bottom of the screen."
			hero={<SnackbarHero />}
			guidelinesLink="https://material.io/design/components/snackbars.html"
			documentationLink="https://material.io/components/web/catalog/snackbars/"
			sourceCodeLink="https://github.com/material-components/material-components-web/tree/master/packages/mdc-snackbar"
			demoLink="https://material-components.github.io/material-components-web-catalog/#/component/snackbar"
			demos={<SnackbarDemos />}
		/>
	);
}
