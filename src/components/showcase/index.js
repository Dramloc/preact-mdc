import { h } from 'preact';
import cx from 'classnames';
import Helmet from 'preact-helmet';

import '@material/list/mdc-list.scss';
import '@material/ripple/mdc-ripple.scss';

import { ListItem, ListItemGraphic, ListItemText } from '../mdc-list';

import style from './style.scss';

function Showcase({
	title,
	description,
	hero,
	guidelinesLink,
	documentationLink,
	sourceCodeLink,
	demoLink,
	demos
}) {
	return (
		<article className={style.showcase}>
			<Helmet
				meta={[
					{
						property: 'og:type',
						content: 'article'
					},
					{
						name: 'twitter:card',
						content: 'summary'
					}
				]}
			/>
			<ShowcaseTitle>{title}</ShowcaseTitle>
			<ShowcaseDescription>{description}</ShowcaseDescription>
			<ShowcaseHero>{hero}</ShowcaseHero>
			<ShowcaseSubtitle>Resources</ShowcaseSubtitle>
			{guidelinesLink && <ShowcaseGuidelines href={guidelinesLink} />}
			{documentationLink && <ShowcaseDocumentation href={documentationLink} />}
			{sourceCodeLink && <ShowcaseSourceCode href={sourceCodeLink} />}
			{demoLink && <ShowcaseDemo href={demoLink} />}
			<ShowcaseSubtitle>Demos</ShowcaseSubtitle>
			{demos}
		</article>
	);
}

function ShowcaseTitle({ children }) {
	return (
		<h1 className="mdc-typography--headline5">
			<Helmet
				title={children}
				meta={[
					{
						itemprop: 'name',
						property: 'og:title',
						name: 'twitter:title',
						content: children
					}
				]}
			/>
			{children}
		</h1>
	);
}

function ShowcaseDescription({ children }) {
	return (
		<p className="mdc-typography--body1">
			<Helmet
				meta={[
					{
						itemprop: 'description',
						property: 'og:description',
						name: 'twitter:description',
						content: children
					}
				]}
			/>
			{children}
		</p>
	);
}

function ShowcaseHero({ children }) {
	return <div className={style.showcase__hero}>{children}</div>;
}

function ShowcaseSubtitle({ children }) {
	return <h2 className={cx(style.showcase__subtitle, 'mdc-typography--headline6')}>{children}</h2>;
}

function ShowcaseSection({ children }) {
	return <section>{children}</section>;
}

function ShowcaseSectionTitle({ children }) {
	return (
		<h3 className={cx(style['showcase__section-title'], 'mdc-typography--subtitle1')}>
			{children}
		</h3>
	);
}

function ShowcaseSectionSubtitle({ children }) {
	return <h4 className="mdc-typography--body2">{children}</h4>;
}

function ShowcaseFrame({ children }) {
	return <main className={cx(style['showcase-frame'])}>{children}</main>;
}

function ShowcaseResource({ href, src, alt, children }) {
	return (
		<ListItem element="a" target="_blank" rel="noopener" href={href}>
			<ListItemGraphic element="span">
				<img className={style['resources-icon']} src={src} alt="Material Design Guidelines icon" />
			</ListItemGraphic>
			<ListItemText>{children}</ListItemText>
		</ListItem>
	);
}

function ShowcaseGuidelines({ href }) {
	return (
		<ShowcaseResource
			href={href}
			src="https://material-components.github.io/material-components-web-catalog/static/media/ic_material_design_24px.svg"
			alt="Material Design Guidelines icon"
		>
			Material Design Guidelines
		</ShowcaseResource>
	);
}

function ShowcaseDocumentation({ href }) {
	return (
		<ShowcaseResource
			href={href}
			src="https://material-components.github.io/material-components-web-catalog/static/media/ic_drive_document_24px.svg"
			alt="Documentation icon"
		>
			Documentation
		</ShowcaseResource>
	);
}

function ShowcaseSourceCode({ href }) {
	return (
		<ShowcaseResource
			href={href}
			src="https://material-components.github.io/material-components-web-catalog/static/media/ic_code_24px.svg"
			alt="Source Code icon"
		>
			Source Code
		</ShowcaseResource>
	);
}

function ShowcaseDemo({ href }) {
	return (
		<ShowcaseResource
			href={href}
			src="https://material.io/develop/images/icons/ic_link_24px.svg"
			alt="Demo icon"
		>
			Demo
		</ShowcaseResource>
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
Showcase.Guidelines = ShowcaseGuidelines;
Showcase.Documentation = ShowcaseDocumentation;
Showcase.SourceCode = ShowcaseSourceCode;
Showcase.Demo = ShowcaseDemo;

export default Showcase;
