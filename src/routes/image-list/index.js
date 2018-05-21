import { h } from 'preact';
import Showcase from '../../components/showcase';

function ImageListHero() {
	return null;
}

function ImageListDemos() {
	return null;
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
