import { h } from 'preact';
import { ListItem, ListItemGraphic, ListItemText, List } from '../../../../src/list';
import { Typography } from '../../../../src/typography';
import Helmet from 'preact-helmet';

import '@material/list/mdc-list.scss';

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
			<List>
				{guidelinesLink && <ShowcaseGuidelinesLink href={guidelinesLink} />}
				{documentationLink && <ShowcaseDocumentationLink href={documentationLink} />}
				{sourceCodeLink && <ShowcaseSourceCodeLink href={sourceCodeLink} />}
				{demoLink && <ShowcaseDemoLink href={demoLink} />}
				{demos && <ShowcaseSubtitle>Demos</ShowcaseSubtitle>}
			</List>
			{demos}
		</article>
	);
}

function ShowcaseTitle({ children }) {
	return (
		<Typography element="h1" modifiers={{ headline5: true }}>
			<Helmet
				title={children}
				meta={[
					{
						itemprop: 'name',
						content: children
					},
					{
						property: 'og:title',
						content: children
					},
					{
						name: 'twitter:title',
						content: children
					}
				]}
			/>
			{children}
		</Typography>
	);
}

function ShowcaseDescription({ children }) {
	return (
		<Typography element="p" modifiers={{ body1: true }}>
			<Helmet
				meta={[
					{
						name: 'description',
						content: children
					},
					{
						name: 'twitter:description',
						content: children
					}
				]}
			/>
			{children}
		</Typography>
	);
}

function ShowcaseHero({ children }) {
	return <div className={style.showcase__hero}>{children}</div>;
}

function ShowcaseSubtitle({ children }) {
	return (
		<Typography element="h2" className={style.showcase__subtitle} modifiers={{ headline6: true }}>
			{children}
		</Typography>
	);
}

function ShowcaseSection({ children }) {
	return <section>{children}</section>;
}

function ShowcaseSectionTitle({ children }) {
	return (
		<Typography
			element="h3"
			className={style['showcase__section-title']}
			modifiers={{ subtitle1: true }}
		>
			{children}
		</Typography>
	);
}

function ShowcaseSectionSubtitle({ children }) {
	return (
		<Typography element="h4" modifiers={{ body2: true }}>
			{children}
		</Typography>
	);
}

function ShowcaseFrame({ children }) {
	return <main className={style['showcase-frame']}>{children}</main>;
}

function ShowcaseResourceLink({ href, src, alt, children }) {
	return (
		<ListItem element="a" target="_blank" rel="noopener" href={href}>
			<ListItemGraphic element="span">
				<img className={style['resources-icon']} src={src} alt="Material Design Guidelines icon" />
			</ListItemGraphic>
			<ListItemText>{children}</ListItemText>
		</ListItem>
	);
}

function ShowcaseGuidelinesLink({ href }) {
	return (
		<ShowcaseResourceLink
			href={href}
			src="https://material-components.github.io/material-components-web-catalog/static/media/ic_material_design_24px.svg"
			alt="Material Design Guidelines icon"
		>
			Material Design Guidelines
		</ShowcaseResourceLink>
	);
}

function ShowcaseDocumentationLink({ href }) {
	return (
		<ShowcaseResourceLink
			href={href}
			src="https://material-components.github.io/material-components-web-catalog/static/media/ic_drive_document_24px.svg"
			alt="Documentation icon"
		>
			Documentation
		</ShowcaseResourceLink>
	);
}

function ShowcaseSourceCodeLink({ href }) {
	return (
		<ShowcaseResourceLink
			href={href}
			src="https://material-components.github.io/material-components-web-catalog/static/media/ic_code_24px.svg"
			alt="Source Code icon"
		>
			Source Code
		</ShowcaseResourceLink>
	);
}

function ShowcaseDemoLink({ href }) {
	return (
		<ShowcaseResourceLink
			href={href}
			src="https://material.io/develop/images/icons/ic_link_24px.svg"
			alt="Demo icon"
		>
			Demo
		</ShowcaseResourceLink>
	);
}

function ShowcaseDemo({ className, children }) {
	return <div className={className}>{children}</div>;
}

Showcase.Hero = ShowcaseHero;
Showcase.Section = ShowcaseSection;
Showcase.Section.Title = ShowcaseSectionTitle;
Showcase.Section.Subtitle = ShowcaseSectionSubtitle;
Showcase.Frame = ShowcaseFrame;
Showcase.Demo = ShowcaseDemo;

export default Showcase;
