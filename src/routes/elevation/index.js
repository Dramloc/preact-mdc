import { h, Component } from 'preact';
import cx from 'classnames';

import { Elevation, withElevationTransition } from '../../components/mdc-elevation';
import Showcase from '../../components/showcase';

import style from './style.scss';

function ElevationHero() {
	return (
		<div>
			<Elevation
				className={cx(style['elevation-demo-surface'], style['elevation-demo-surface--hero'])}
				modifiers={{ z0: true }}
			>
				Flat 0dp
			</Elevation>
			<Elevation
				className={cx(style['elevation-demo-surface'], style['elevation-demo-surface--hero'])}
				modifiers={{ z8: true }}
			>
				Raised 8dp
			</Elevation>
			<Elevation
				className={cx(style['elevation-demo-surface'], style['elevation-demo-surface--hero'])}
				modifiers={{ z16: true }}
			>
				Raised 16dp
			</Elevation>
		</div>
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
			<div className={style['elevation-demo-container']}>
				<Showcase.Section>
					<Showcase.Section.Title>Elevations</Showcase.Section.Title>
					{Array(...{ length: 25 }).map((_, index) => (
						<Elevation
							className={style['elevation-demo-surface']}
							modifiers={{ [`z${index}`]: true }}
						>
							{`${index}dp`}
						</Elevation>
					))}
				</Showcase.Section>
				<Showcase.Section>
					<Showcase.Section.Title>Elevation Transition</Showcase.Section.Title>
					<TransitionedElevation
						onClick={this.incrementElevation}
						className={style['elevation-demo-surface']}
						modifiers={{ [`z${elevation}`]: true }}
					>
						Click me!
					</TransitionedElevation>
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
