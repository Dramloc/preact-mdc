import { h } from 'preact';
import { LinearProgress } from '@preact/mdc/linear-progress';

import '@material/linear-progress/mdc-linear-progress.scss';

import Showcase from '../../components/showcase';

import style from './style.scss';

function LinearProgressHero() {
	return (
		<Showcase.Demo className={style['hero-linear-progress-indicator']}>
			<LinearProgress progress={0.5} determinate />
		</Showcase.Demo>
	);
}

function LinearProgressDemos() {
	return (
		<div>
			<Showcase.Section className={style['demo-linear-progress-indicator']}>
				<Showcase.Section.Title>Buffered</Showcase.Section.Title>
				<Showcase.Demo>
					<LinearProgress progress={0.5} buffer={0.75} determinate />
				</Showcase.Demo>
			</Showcase.Section>
			<Showcase.Section className={style['demo-linear-progress-indicator']}>
				<Showcase.Section.Title>Indeterminate</Showcase.Section.Title>
				<Showcase.Demo>
					<LinearProgress determinate={false} />
				</Showcase.Demo>
			</Showcase.Section>
			<Showcase.Section className={style['demo-linear-progress-indicator']}>
				<Showcase.Section.Title>Reversed</Showcase.Section.Title>
				<Showcase.Demo>
					<LinearProgress progress={0.5} reverse determinate />
				</Showcase.Demo>
			</Showcase.Section>
			<Showcase.Section className={style['demo-linear-progress-indicator']}>
				<Showcase.Section.Title>Reversed Buffered</Showcase.Section.Title>
				<Showcase.Demo>
					<LinearProgress progress={0.5} buffer={0.75} reverse determinate />
				</Showcase.Demo>
			</Showcase.Section>
		</div>
	);
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
