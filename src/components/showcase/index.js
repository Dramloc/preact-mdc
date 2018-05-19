import { h } from 'preact';
import cx from 'classnames';
import Helmet from 'preact-helmet';

import '@material/typography/mdc-typography.scss';

import style from './style.scss';

function Showcase({ children }) {
	return (
		<article className={cx(style.showcase, 'mdc-typography')}>
			{children}
		</article>
	);
}

function ShowcaseTitle({ children }) {
	return (
		<h1 className="mdc-typography--headline5">
			<Helmet title={children} />
			{children}
		</h1>
	);
}

function ShowcaseDescription({ children }) {
	return <h1 className="mdc-typography--body1">{children}</h1>;
}

function ShowcaseHero({ children }) {
	return <div className={style.showcase__hero}>{children}</div>;
}

function ShowcaseSubtitle({ children }) {
	return (
		<h2 className={cx(style.showcase__subtitle, 'mdc-typography--headline6')}>
			{children}
		</h2>
	);
}

function ShowcaseSection({ children }) {
	return <section>{children}</section>;
}

function ShowcaseSectionTitle({ children }) {
	return (
		<h3
			className={cx(
				style['showcase__section-title'],
				'mdc-typography--subtitle1'
			)}
		>
			{children}
		</h3>
	);
}

function ShowcaseSectionSubtitle({ children }) {
	return <h4 className="mdc-typography--body2">{children}</h4>;
}

function ShowcaseFrame({ children }) {
	return (
		<main className={cx(style['showcase-frame'], 'mdc-typography')}>
			{children}
		</main>
	);
}

Showcase.Hero = ShowcaseHero;
Showcase.Title = ShowcaseTitle;
Showcase.Description = ShowcaseDescription;
Showcase.Subtitle = ShowcaseSubtitle;
Showcase.Section = ShowcaseSection;
Showcase.Section.Title = ShowcaseSectionTitle;
Showcase.Section.Subtitle = ShowcaseSectionSubtitle;
Showcase.Frame = ShowcaseFrame;

export default Showcase;
