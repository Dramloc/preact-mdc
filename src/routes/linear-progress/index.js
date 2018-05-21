import { h } from 'preact';
import Showcase from '../../components/showcase';

function LinearProgressHero() {
	return null;
}

function LinearProgressDemos() {
	return null;
}

export default function LinearProgressShowcase() {
	return (
		<Showcase
			title="Linear Progress Indicator"
			description="Progress indicators display the length of a process or express an unspecified wait time."
			hero={<LinearProgressHero />}
			guidelinesLink="https://material.io/design/components/progress-indicators.html"
			documentationLink="https://material.io/develop/web/components/linear-progress/"
			sourceCodeLink="https://github.com/material-components/material-components-web/tree/master/packages/mdc-linear-progress"
			demoLink="https://material-components.github.io/material-components-web-catalog/#/component/linear-progress-indicator"
			demos={<LinearProgressDemos />}
		/>
	);
}
