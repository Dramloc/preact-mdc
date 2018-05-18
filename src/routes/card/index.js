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
const ActionButton = withRipple(withAction(Button));
const ActionIcon = withUnboundedSurfaceRipple(withAction(Icon));
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
					<RippledPrimaryAction tabindex="0">
						<Card.Media
							className={style['demo-card__media']}
							{...{ '16-9': true }}
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
							<ActionButton button>Read</ActionButton>
							<ActionButton button>Bookmark</ActionButton>
						</Card.ActionButtons>
						<Card.ActionIcons>
							<ActionIconToggle
								icon
								tabindex="0"
								data-toggle-on={{
									content: 'favorite',
									label: 'Remove from favorites'
								}}
								data-toggle-off={{
									content: 'favorite_border',
									label: 'Add to favorites'
								}}
							/>
							<ActionIcon icon title="Share" tabindex="0" role="button">
								share
							</ActionIcon>
							<ActionIcon icon title="More options" tabindex="0" role="button">
								more_vert
							</ActionIcon>
						</Card.ActionIcons>
					</Card.Actions>
				</Card>
			</Showcase.Hero>
			<Showcase.Subtitle>Demos</Showcase.Subtitle>
			<Showcase.Section>
				<Card className={style['demo-card']}>
					<RippledPrimaryAction tabindex="0">
						<Card.Media
							className={style['demo-card__media']}
							{...{ '16-9': true }}
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
				<Card className={style['demo-card']}>
					<RippledPrimaryAction tabindex="0">
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
							<ActionButton button>Read</ActionButton>
							<ActionButton button>Bookmark</ActionButton>
						</Card.ActionButtons>
						<Card.ActionIcons>
							<ActionIconToggle
								icon
								tabindex="0"
								data-toggle-on={{
									content: 'favorite',
									label: 'Remove from favorites'
								}}
								data-toggle-off={{
									content: 'favorite_border',
									label: 'Add to favorites'
								}}
							/>
							<ActionIcon
								icon
								title="Share"
								tabindex="0"
								role="button"
								data-mdc-ripple-is-unbounded
							>
								share
							</ActionIcon>
							<ActionIcon
								icon
								title="More options"
								tabindex="0"
								role="button"
								data-mdc-ripple-is-unbounded
							>
								more_vert
							</ActionIcon>
						</Card.ActionIcons>
					</Card.Actions>
				</Card>
			</Showcase.Section>
		</Showcase>
	);
}