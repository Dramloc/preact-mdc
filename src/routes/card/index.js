import { h } from 'preact';
import cx from 'classnames';

import {
	withRipple,
	withSurfaceRipple,
	withUnboundedSurfaceRipple
} from '../../components/mdc-ripple';
import Button from '../../components/mdc-button';
import Card, { withAction } from '../../components/mdc-card';
import Icon from '../../components/mdc-icon';
import IconToggle from '../../components/mdc-icon-toggle';
import Showcase from '../../components/showcase';

import style from './style.scss';

const RippledPrimaryAction = withSurfaceRipple(Card.PrimaryAction);
const ActionButton = withAction(withRipple(Button));
const ActionIcon = withAction(withUnboundedSurfaceRipple(Icon));
const ActionIconToggle = withAction(IconToggle);

export default function CardShowcase() {
	return (
		<Showcase>
			<Showcase.Title>Card</Showcase.Title>
			<Showcase.Description>
				Cards contain content and actions about a single subject.
			</Showcase.Description>
			<Showcase.Hero>
				<Card className={cx(style['demo-card'], style['demo-card--hero'])}>
					<RippledPrimaryAction>
						<Card.Media
							className={style['demo-card__media']}
							modifiers={{ '16-9': true }}
						/>
						<div className={style['demo-card__primary']}>
							<h2
								className={cx(
									style['demo-card__title'],
									'mdc-typography--headline6'
								)}
							>
								Our Changing Planet
							</h2>
							<h3
								className={cx(
									style['demo-card__subtitle'],
									'mdc-typography--subtitle2'
								)}
							>
								by Kurt Wagner
							</h3>
						</div>
						<div
							className={cx(
								style['demo-card__secondary'],
								'mdc-typography--body2'
							)}
						>
							Visit ten places on our planet that are undergoing the biggest
							changes today.
						</div>
					</RippledPrimaryAction>
					<Card.Actions>
						<Card.ActionButtons>
							<ActionButton modifiers={{ button: true }}>Read</ActionButton>
							<ActionButton modifiers={{ button: true }}>Bookmark</ActionButton>
						</Card.ActionButtons>
						<Card.ActionIcons>
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
						</Card.ActionIcons>
					</Card.Actions>
				</Card>
			</Showcase.Hero>
			<Showcase.Subtitle>Resources</Showcase.Subtitle>
			<Showcase.Guidelines href="https://material.io/design/components/cards.html" />
			<Showcase.Documentation href="https://material.io/components/web/catalog/cards/" />
			<Showcase.SourceCode href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-card" />
			<Showcase.Demo href="https://material-components.github.io/material-components-web-catalog/#/component/card" />
			<Showcase.Subtitle>Demos</Showcase.Subtitle>
			<Showcase.Section>
				<Showcase.Section.Title>Card Media</Showcase.Section.Title>
				<Card className={style['demo-card']}>
					<RippledPrimaryAction>
						<Card.Media
							className={style['demo-card__media']}
							modifiers={{ '16-9': true }}
						/>
						<div className={style['demo-card__primary']}>
							<h2
								className={cx(
									style['demo-card__title'],
									'mdc-typography--headline6'
								)}
							>
								Our Changing Planet
							</h2>
							<h3
								className={cx(
									style['demo-card__subtitle'],
									'mdc-typography--subtitle2'
								)}
							>
								by Kurt Wagner
							</h3>
						</div>
						<div
							className={cx(
								style['demo-card__secondary'],
								'mdc-typography--body2'
							)}
						>
							Visit ten places on our planet that are undergoing the biggest
							changes today.
						</div>
					</RippledPrimaryAction>
				</Card>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Card Actions</Showcase.Section.Title>
				<Card className={style['demo-card']}>
					<RippledPrimaryAction>
						<div className={style['demo-card__primary']}>
							<h2
								className={cx(
									style['demo-card__title'],
									'mdc-typography--headline6'
								)}
							>
								Our Changing Planet
							</h2>
							<h3
								className={cx(
									style['demo-card__subtitle'],
									'mdc-typography--subtitle2'
								)}
							>
								by Kurt Wagner
							</h3>
						</div>
						<div
							className={cx(
								style['demo-card__secondary'],
								'mdc-typography--body2'
							)}
						>
							Visit ten places on our planet that are undergoing the biggest
							changes today.
						</div>
					</RippledPrimaryAction>
					<Card.Actions>
						<Card.ActionButtons>
							<ActionButton modifiers={{ button: true }}>Read</ActionButton>
							<ActionButton modifiers={{ button: true }}>Bookmark</ActionButton>
						</Card.ActionButtons>
						<Card.ActionIcons>
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
						</Card.ActionIcons>
					</Card.Actions>
				</Card>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Outlined</Showcase.Section.Title>
				<Card className={style['demo-card']} modifiers={{ outlined: true }}>
					<RippledPrimaryAction>
						<div className={style['demo-card__primary']}>
							<h2
								className={cx(
									style['demo-card__title'],
									'mdc-typography--headline6'
								)}
							>
								Our Changing Planet
							</h2>
							<h3
								className={cx(
									style['demo-card__subtitle'],
									'mdc-typography--subtitle2'
								)}
							>
								by Kurt Wagner
							</h3>
						</div>
						<div
							className={cx(
								style['demo-card__secondary'],
								'mdc-typography--body2'
							)}
						>
							Visit ten places on our planet that are undergoing the biggest
							changes today.
						</div>
					</RippledPrimaryAction>
					<Card.Actions>
						<Card.ActionButtons>
							<ActionButton modifiers={{ button: true }}>Read</ActionButton>
							<ActionButton modifiers={{ button: true }}>Bookmark</ActionButton>
						</Card.ActionButtons>
						<Card.ActionIcons>
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
						</Card.ActionIcons>
					</Card.Actions>
				</Card>
			</Showcase.Section>
		</Showcase>
	);
}
