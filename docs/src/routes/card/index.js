import {
	Card,
	CardPrimaryAction,
	CardMedia,
	CardActions,
	CardActionButtons,
	CardActionIcons,
	CardActionButton,
	CardActionIconToggle,
	CardActionIcon
} from '../../../../src/card';
import { h } from 'preact';
import { Typography } from '../../../../src/typography';
import cx from 'classnames';

import '@material/button/mdc-button.scss';
import '@material/card/mdc-card.scss';
import '@material/icon-toggle/mdc-icon-toggle.scss';

import Showcase from '../../components/showcase';

import style from './style.scss';

function DemoCardMedia() {
	return <CardMedia className={style['demo-card__media']} modifiers={{ '16-9': true }} />;
}

function DemoCardPrimary() {
	return (
		<div className={style['demo-card__primary']}>
			<Typography
				element="h2"
				className={style['demo-card__title']}
				modifiers={{ headline6: true }}
			>
				Our Changing Planet
			</Typography>
			<Typography
				element="h3"
				className={style['demo-card__subtitle']}
				modifiers={{ subtitle2: true }}
			>
				by Kurt Wagner
			</Typography>
		</div>
	);
}

function DemoCardSecondary() {
	return (
		<Typography element="div" className={style['demo-card__secondary']} modifiers={{ body2: true }}>
			Visit ten places on our planet that are undergoing the biggest changes today.
		</Typography>
	);
}

function DemoCardActions() {
	return (
		<CardActions>
			<CardActionButtons>
				<CardActionButton>Read</CardActionButton>
				<CardActionButton>Bookmark</CardActionButton>
			</CardActionButtons>
			<CardActionIcons>
				<CardActionIconToggle
					on={false}
					data-toggle-on={{
						content: 'favorite',
						label: 'Remove from favorites'
					}}
					data-toggle-off={{
						content: 'favorite_border',
						label: 'Add to favorites'
					}}
				/>
				<CardActionIcon title="Share">share</CardActionIcon>
				<CardActionIcon title="More options">more_vert</CardActionIcon>
			</CardActionIcons>
		</CardActions>
	);
}

function CardHero() {
	return (
		<Showcase.Demo>
			<Card className={cx(style['demo-card'], style['demo-card--hero'])}>
				<CardPrimaryAction>
					<DemoCardMedia />
					<DemoCardPrimary />
					<DemoCardSecondary />
				</CardPrimaryAction>
				<DemoCardActions />
			</Card>
		</Showcase.Demo>
	);
}

function CardDemos() {
	return (
		<div>
			<Showcase.Section>
				<Showcase.Section.Title>Card Media</Showcase.Section.Title>
				<Showcase.Demo>
					<Card className={style['demo-card']}>
						<CardPrimaryAction>
							<DemoCardMedia />
							<DemoCardPrimary />
							<DemoCardSecondary />
						</CardPrimaryAction>
					</Card>
				</Showcase.Demo>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Card Actions</Showcase.Section.Title>
				<Showcase.Demo>
					<Card className={style['demo-card']}>
						<CardPrimaryAction>
							<DemoCardPrimary />
							<DemoCardSecondary />
						</CardPrimaryAction>
						<DemoCardActions />
					</Card>
				</Showcase.Demo>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Outlined</Showcase.Section.Title>
				<Showcase.Demo>
					<Card className={style['demo-card']} modifiers={{ outlined: true }}>
						<CardPrimaryAction>
							<DemoCardPrimary />
							<DemoCardSecondary />
						</CardPrimaryAction>
						<DemoCardActions />
					</Card>
				</Showcase.Demo>
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
