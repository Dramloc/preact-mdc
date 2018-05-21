import { h } from 'preact';
import { MDCSlider } from '@material/slider';

import { Base } from '../mdc-base';
import { withMaterialComponent } from '../with-material-component';

export function SliderBase(props) {
	return (
		<Base
			element="div"
			classes={{ name: 'mdc-slider', modifiers: ['discrete', 'display-markers'] }}
			role="slider"
			tabindex="0"
			{...props}
		>
			<div class="mdc-slider__track-container">
				<div class="mdc-slider__track" />
				<div class="mdc-slider__track-marker-container" />
			</div>
			<div class="mdc-slider__thumb-container">
				<div class="mdc-slider__pin">
					<span class="mdc-slider__pin-value-marker" />
				</div>
				<svg class="mdc-slider__thumb" width="21" height="21">
					<circle cx="10.5" cy="10.5" r="7.875" />
				</svg>
				<div class="mdc-slider__focus-ring" />
			</div>
		</Base>
	);
}

export const Slider = withMaterialComponent(SliderBase, MDCSlider);
