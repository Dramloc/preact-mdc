import { h } from 'preact';

import { Base } from '../base';

export function ImageList(props) {
	return (
		<Base
			element="ul"
			classes={{ name: 'mdc-image-list', modifiers: ['masonry', 'with-text-protection'] }}
			{...props}
		/>
	);
}

export function ImageListItem(props) {
	return <Base element="li" classes={{ name: 'mdc-image-list__item' }} {...props} />;
}

export function ImageListImageAspectContainer(props) {
	return (
		<Base element="div" classes={{ name: 'mdc-image-list__image-aspect-container' }} {...props} />
	);
}

export function ImageListImage(props) {
	return <Base element="img" classes={{ name: 'mdc-image-list__image' }} {...props} />;
}

export function ImageListSupporting(props) {
	return <Base element="div" classes={{ name: 'mdc-image-list__supporting' }} {...props} />;
}

export function ImageListLabel(props) {
	return <Base element="span" classes={{ name: 'mdc-image-list__label' }} {...props} />;
}
