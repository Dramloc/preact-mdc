import { h } from 'preact';
import cx from 'classnames';

import style from './style.scss';

function Showcase({ children }) {
	return (
		<main className={cx(style.showcase, 'mdc-typography')}>{children}</main>
	);
}

function ShowcaseTitle({ children }) {
	return <h1 className="mdc-typography--headline5">{children}</h1>;
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
	return <h3 className="mdc-typography--subtitle1">{children}</h3>;
}

Showcase.Hero = ShowcaseHero;
Showcase.Title = ShowcaseTitle;
Showcase.Description = ShowcaseDescription;
Showcase.Subtitle = ShowcaseSubtitle;
Showcase.Section = ShowcaseSection;
Showcase.Section.Title = ShowcaseSectionTitle;

export default Showcase;
