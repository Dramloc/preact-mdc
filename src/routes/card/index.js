import { h } from 'preact';
import cx from 'classnames';

import '@material/button/mdc-button.scss';
import '@material/card/mdc-card.scss';
import '@material/icon-toggle/mdc-icon-toggle.scss';
import '@material/ripple/mdc-ripple.scss';

import { Button } from '../../components/mdc-button';

import {
	Card,
	CardPrimaryAction,
	CardMedia,
	CardActions,
	CardActionButtons,
	CardActionIcons,
	withCardAction
} from '../../components/mdc-card';
import { RippledIcon } from '../../components/mdc-icon';
import { IconToggle } from '../../components/mdc-icon-toggle';
import Showcase from '../../components/showcase';

import style from './style.scss';

const ActionButton = withCardAction(Button);
const ActionIconToggle = withCardAction(IconToggle);
const ActionIcon = withCardAction(RippledIcon);

function DemoCardMedia() {
	return <CardMedia className={style['demo-card__media']} modifiers={{ '16-9': true }} />;
}

function DemoCardPrimary() {
	return (
		<div className={style['demo-card__primary']}>
			<h2 className={cx(style['demo-card__title'], 'mdc-typography--headline6')}>
				Our Changing Planet
			</h2>
			<h3 className={cx(style['demo-card__subtitle'], 'mdc-typography--subtitle2')}>
				by Kurt Wagner
			</h3>
		</div>
	);
}

function DemoCardSecondary() {
	return (
		<div className={cx(style['demo-card__secondary'], 'mdc-typography--body2')}>
			Visit ten places on our planet that are undergoing the biggest changes today.
		</div>
	);
}

function DemoCardActions() {
	return (
		<CardActions>
			<CardActionButtons>
				<ActionButton modifiers={{ button: true }}>Read</ActionButton>
				<ActionButton modifiers={{ button: true }}>Bookmark</ActionButton>
			</CardActionButtons>
			<CardActionIcons>
				<ActionIconToggle
					modifiers={{ icon: true }}
					aria-pressed="false"
					aria-label="Add to favorites"
					data-toggle-on={{
						content: 'favorite',
						label: 'Remove from favorites'
					}}
					data-toggle-off={{
						content: 'favorite_border',
						label: 'Add to favorites'
					}}
				>
					favorite_border
				</ActionIconToggle>
				<ActionIcon modifiers={{ icon: true }} title="Share">
					share
				</ActionIcon>
				<ActionIcon modifiers={{ icon: true }} title="More options">
					more_vert
				</ActionIcon>
			</CardActionIcons>
		</CardActions>
	);
}

function CardHero() {
	return (
		<div>
			<Card className={cx(style['demo-card'], style['demo-card--hero'])}>
				<CardPrimaryAction>
					<DemoCardMedia />
					<DemoCardPrimary />
					<DemoCardSecondary />
				</CardPrimaryAction>
				<DemoCardActions />
			</Card>
		</div>
	);
}

function CardDemos() {
	return (
		<div>
			<Showcase.Section>
				<Showcase.Section.Title>Card Media</Showcase.Section.Title>
				<Card className={style['demo-card']}>
					<CardPrimaryAction>
						<DemoCardMedia />
						<DemoCardPrimary />
						<DemoCardSecondary />
					</CardPrimaryAction>
				</Card>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Card Actions</Showcase.Section.Title>
				<Card className={style['demo-card']}>
					<CardPrimaryAction>
						<DemoCardPrimary />
						<DemoCardSecondary />
					</CardPrimaryAction>
					<DemoCardActions />
				</Card>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Outlined</Showcase.Section.Title>
				<Card className={style['demo-card']} modifiers={{ outlined: true }}>
					<CardPrimaryAction>
						<DemoCardPrimary />
						<DemoCardSecondary />
					</CardPrimaryAction>
					<DemoCardActions />
				</Card>
			</Showcase.Section>
		</div>
	);
}

export default function CardShowcase() {
	return (
		<Showcase
			title="Card"
			description="Cards contain content and actions about a single subject."
			hero={<CardHero />}
			guidelinesLink="https://material.io/design/components/cards.html"
			documentationLink="https://material.io/components/web/catalog/cards/"
			sourceCodeLink="https://github.com/material-components/material-components-web/tree/master/packages/mdc-card"
			demoLink="https://material-components.github.io/material-components-web-catalog/#/component/card"
			demos={<CardDemos />}
		/>
	);
}
