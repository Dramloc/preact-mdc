import { Button } from '../../../../src/button';
import {
	Card,
	CardPrimaryAction,
	CardActions,
	CardActionIcons,
	CardActionIconToggle,
	CardActionIcon
} from '../../../../src/card';
import { h } from 'preact';
import { ShapeContainer, ShapeContainerCorner } from '../../../../src/shape';
import { Typography } from '../../../../src/typography';

import '@material/button/mdc-button.scss';
import '@material/card/mdc-card.scss';
import '@material/icon-button/mdc-icon-button.scss';
import '@material/shape/mdc-shape.scss';

import Showcase from '../../components/showcase';

import cardStyle from '../card/style.scss';
import style from './style.scss';

function DemoCardPrimary() {
	return (
		<div className={cardStyle['demo-card__primary']}>
			<Typography
				element="h2"
				className={cardStyle['demo-card__title']}
				modifiers={{ headline6: true }}
			>
				Our Changing Planet
			</Typography>
			<Typography
				element="h3"
				className={cardStyle['demo-card__subtitle']}
				modifiers={{ subtitle2: true }}
			>
				by Kurt Wagner
			</Typography>
		</div>
	);
}

function DemoCardSecondary() {
	return (
		<Typography
			element="div"
			className={cardStyle['demo-card__secondary']}
			modifiers={{ body2: true }}
		>
			Visit ten places on our planet that are undergoing the biggest changes today.
		</Typography>
	);
}

function DemoCardActions() {
	return (
		<CardActions>
			<CardActionIcons>
				<CardActionIconToggle
					on={false}
					data-toggle-on-label="Remove from favorites"
					data-toggle-on-content="favorite"
					data-toggle-off-label="Add to favorites"
					data-toggle-off-content="favorite_border"
				/>
				<CardActionIcon title="Share">share</CardActionIcon>
				<CardActionIcon title="More options">more_vert</CardActionIcon>
			</CardActionIcons>
		</CardActions>
	);
}

function ShapeHero() {
	return (
		<Showcase.Demo>
			<ShapeContainer className={style['hero-shape-container']}>
				<Button modifiers={{ unelevated: true }}>Angled Corners</Button>
				<ShapeContainerCorner modifiers={{ 'top-left': true }} />
				<ShapeContainerCorner modifiers={{ 'top-right': true }} />
				<ShapeContainerCorner modifiers={{ 'bottom-left': true }} />
				<ShapeContainerCorner modifiers={{ 'bottom-right': true }} />
			</ShapeContainer>
		</Showcase.Demo>
	);
}

function ShapeDemos() {
	return (
		<div>
			<Showcase.Section>
				<Showcase.Section.Title>Contained Button</Showcase.Section.Title>
				<Showcase.Demo>
					<ShapeContainer className={style['contained-button-shape-container']}>
						<Button modifiers={{ unelevated: true }}>Skip</Button>
						<ShapeContainerCorner modifiers={{ 'top-left': true }} />
						<ShapeContainerCorner modifiers={{ 'bottom-right': true }} />
					</ShapeContainer>
					<ShapeContainer className={style['contained-button-shape-container']}>
						<Button modifiers={{ unelevated: true }}>Finish</Button>
						<ShapeContainerCorner modifiers={{ 'top-left': true }} />
						<ShapeContainerCorner modifiers={{ 'top-right': true }} />
						<ShapeContainerCorner modifiers={{ 'bottom-left': true }} />
						<ShapeContainerCorner modifiers={{ 'bottom-right': true }} />
					</ShapeContainer>
				</Showcase.Demo>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Contained Button</Showcase.Section.Title>
				<Showcase.Demo>
					<ShapeContainer className={style['outlined-button-shape-container']}>
						<Button modifiers={{ outlined: true }}>Skip</Button>
						<ShapeContainerCorner modifiers={{ 'top-left': true }} />
						<ShapeContainerCorner modifiers={{ 'bottom-right': true }} />
					</ShapeContainer>
					<ShapeContainer className={style['outlined-button-shape-container']}>
						<Button modifiers={{ outlined: true }}>Finish</Button>
						<ShapeContainerCorner modifiers={{ 'top-left': true }} />
						<ShapeContainerCorner modifiers={{ 'top-right': true }} />
						<ShapeContainerCorner modifiers={{ 'bottom-left': true }} />
						<ShapeContainerCorner modifiers={{ 'bottom-right': true }} />
					</ShapeContainer>
				</Showcase.Demo>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Outlined</Showcase.Section.Title>
				<Showcase.Demo>
					<ShapeContainer className={style['card-shape-container']}>
						<Card className={style['card-shape-container__card']} modifiers={{ outlined: true }}>
							<CardPrimaryAction>
								<DemoCardPrimary />
								<DemoCardSecondary />
							</CardPrimaryAction>
							<DemoCardActions />
						</Card>
						<ShapeContainerCorner modifiers={{ 'top-right': true }} />
						<ShapeContainerCorner modifiers={{ 'bottom-left': true }} />
					</ShapeContainer>
				</Showcase.Demo>
			</Showcase.Section>
		</div>
	);
}

export default function ShapeShowcase() {
	return (
		<Showcase
			title="Shape"
			description="Shapes direct attention, identify components, communicate state, and express brand."
			hero={<ShapeHero />}
			guidelinesLink="https://material.io/design/shape/about-shape.html#shaping-material"
			documentationLink="https://material.io/develop/web/components/shape/"
			sourceCodeLink="https://github.com/material-components/material-components-web/tree/master/packages/mdc-shape"
			demoLink="https://material-components.github.io/material-components-web-catalog/#/component/shape"
			demos={<ShapeDemos />}
		/>
	);
}
