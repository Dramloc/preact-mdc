import { h, Component } from 'preact';

import '@material/linear-progress/mdc-linear-progress.scss';

import { LinearProgress } from '../../components/mdc-progress-linear';
import Showcase from '../../components/showcase';

import style from './style.scss';

class LinearProgressHero extends Component {
	componentDidMount() {
		this.indicator.MDCComponent.progress = 0.5;
	}
	render() {
		return (
			<div className={style['hero-linear-progress-indicator']}>
				<LinearProgress ref={ref => (this.indicator = ref)} />
			</div>
		);
	}
}

class LinearProgressDemos extends Component {
	componentDidMount() {
		this.bufferedIndicator.MDCComponent.progress = 0.5;
		this.bufferedIndicator.MDCComponent.buffer = 0.75;
		this.reversedIndicator.MDCComponent.progress = 0.5;
		this.reversedBufferedIndicator.MDCComponent.progress = 0.5;
		this.reversedBufferedIndicator.MDCComponent.buffer = 0.75;
	}
	render() {
		return (
			<div>
				<Showcase.Section className={style['demo-linear-progress-indicator']}>
					<Showcase.Section.Title>Buffered</Showcase.Section.Title>
					<LinearProgress ref={ref => (this.bufferedIndicator = ref)} />
				</Showcase.Section>
				<Showcase.Section className={style['demo-linear-progress-indicator']}>
					<Showcase.Section.Title>Indeterminate</Showcase.Section.Title>
					<LinearProgress modifiers={{ indeterminate: true }} />
				</Showcase.Section>
				<Showcase.Section className={style['demo-linear-progress-indicator']}>
					<Showcase.Section.Title>Reversed</Showcase.Section.Title>
					<LinearProgress
						modifiers={{ reversed: true }}
						ref={ref => (this.reversedIndicator = ref)}
					/>
				</Showcase.Section>
				<Showcase.Section className={style['demo-linear-progress-indicator']}>
					<Showcase.Section.Title>Reversed Buffered</Showcase.Section.Title>
					<LinearProgress
						modifiers={{ reversed: true }}
						ref={ref => (this.reversedBufferedIndicator = ref)}
					/>
				</Showcase.Section>
			</div>
		);
	}
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
