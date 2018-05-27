import { Elevation, withElevationTransition } from '@preact/mdc/elevation';
import { h, Component } from 'preact';
import cx from 'classnames';

import '@material/elevation/mdc-elevation.scss';

import Showcase from '../../components/showcase';

import style from './style.scss';

function ElevationHero() {
	return (
		<Showcase.Demo>
			<Elevation
				className={cx(style['elevation-demo-surface'], style['elevation-demo-surface--hero'])}
				modifiers={{ z: 0 }}
			>
				Flat 0dp
			</Elevation>
			<Elevation
				className={cx(style['elevation-demo-surface'], style['elevation-demo-surface--hero'])}
				modifiers={{ z: 8 }}
			>
				Raised 8dp
			</Elevation>
			<Elevation
				className={cx(style['elevation-demo-surface'], style['elevation-demo-surface--hero'])}
				modifiers={{ z: 16 }}
			>
				Raised 16dp
			</Elevation>
		</Showcase.Demo>
	);
}

const TransitionedElevation = withElevationTransition(Elevation);

class ElevationDemos extends Component {
	state = {
		elevation: 0
	};
	incrementElevation = () => {
		this.setState({ elevation: (this.state.elevation + 8) % 24 });
	};
	render(_, { elevation }) {
		return (
			<div>
				<Showcase.Section>
					<Showcase.Section.Title>Elevations</Showcase.Section.Title>
					<Showcase.Demo className={style['elevation-demo-container']}>
						{Array(...{ length: 25 }).map((_, index) => (
							<Elevation className={style['elevation-demo-surface']} modifiers={{ z: index }}>
								{`${index}dp`}
							</Elevation>
						))}
					</Showcase.Demo>
				</Showcase.Section>
				<Showcase.Section>
					<Showcase.Section.Title>Elevation Transition</Showcase.Section.Title>
					<Showcase.Demo>
						<TransitionedElevation
							onClick={this.incrementElevation}
							className={style['elevation-demo-surface']}
							modifiers={{ z: elevation }}
						>
							Click me!
						</TransitionedElevation>
					</Showcase.Demo>
				</Showcase.Section>
			</div>
		);
	}
}

export default function ElevationShowcase() {
	return (
		<Showcase
			title="Elevation"
			description="Elevation is the relative depth, or distance, between two surfaces along the z-axis."
			hero={<ElevationHero />}
			guidelinesLink="https://material.io/design/components/elevation.html"
			documentationLink="https://material.io/components/web/catalog/elevation/"
			sourceCodeLink="https://github.com/material-components/material-components-web/tree/master/packages/mdc-elevation"
			demoLink="https://material-components.github.io/material-components-web-catalog/#/component/elevation"
			demos={<ElevationDemos />}
		/>
	);
}
