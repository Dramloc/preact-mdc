import { h } from 'preact';

import '@material/image-list/mdc-image-list.scss';

import {
	ImageList,
	ImageListImageAspectContainer,
	ImageListImage,
	ImageListItem,
	ImageListSupporting,
	ImageListLabel
} from '../../components/mdc-image-list';
import Showcase from '../../components/showcase';

import style from './style.scss';

const url =
	'https://material-components.github.io/material-components-web-catalog/static/media/photos';
const masonryImageListItems = [
	'3x2/16.jpg',
	'2x3/1.jpg',
	'3x2/1.jpg',
	'2x3/2.jpg',
	'2x3/3.jpg',
	'3x2/2.jpg',
	'2x3/4.jpg',
	'3x2/3.jpg',
	'2x3/5.jpg',
	'3x2/4.jpg',
	'2x3/6.jpg',
	'3x2/5.jpg',
	'2x3/7.jpg',
	'3x2/6.jpg',
	'3x2/7.jpg'
];

function ImageListHero() {
	return (
		<div>
			<ImageList className={style['hero-image-list']}>
				{Array(...{ length: 15 }).map(_ => (
					<ImageListItem className={style['hero-image-list__item']}>
						<ImageListImageAspectContainer>
							<ImageListImage element="div" className={style['hero-image-list__image']} />
						</ImageListImageAspectContainer>
					</ImageListItem>
				))}
			</ImageList>
		</div>
	);
}

function ImageListDemos() {
	return (
		<div>
			<Showcase.Section>
				<Showcase.Section.Title>Standard Image List with Text Protection</Showcase.Section.Title>
				<ImageList
					className={style['standard-image-list']}
					modifiers={{ 'with-text-protection': true }}
				>
					{Array(...{ length: 15 }).map((_, index) => (
						<ImageListItem className={style['standard-image-list__item']}>
							<ImageListImageAspectContainer
								className={style['standard-image-list__image-aspect-container']}
							>
								<ImageListImage src={`${url}/3x2/${index + 1}.jpg`} alt="Text label" />
							</ImageListImageAspectContainer>
							<ImageListSupporting>
								<ImageListLabel>Text label</ImageListLabel>
							</ImageListSupporting>
						</ImageListItem>
					))}
				</ImageList>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Masonry Image List</Showcase.Section.Title>
				<ImageList className={style['masonry-image-list']} modifiers={{ masonry: true }}>
					{masonryImageListItems.map((image, index) => (
						<ImageListItem className={style['masonry-image-list__item']}>
							<ImageListImage
								className="masonry-image-list__image"
								src={`${url}/${image}`}
								alt="Text label"
							/>
							<ImageListSupporting>
								<ImageListLabel>Text label</ImageListLabel>
							</ImageListSupporting>
						</ImageListItem>
					))}
				</ImageList>
			</Showcase.Section>
		</div>
	);
}

export default function ImageListShowcase() {
	return (
		<Showcase
			title="Image List"
			description="Image lists display a collection of images in an organized grid."
			hero={<ImageListHero />}
			guidelinesLink="https://material.io/design/components/image-lists.html"
			documentationLink="https://material.io/components/web/catalog/image-lists/"
			sourceCodeLink="https://github.com/material-components/material-components-web/tree/master/packages/mdc-image-list"
			demoLink="https://material-components.github.io/material-components-web-catalog/#/component/image-list"
			demos={<ImageListDemos />}
		/>
	);
}
