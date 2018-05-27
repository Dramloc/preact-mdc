import { FloatingLabelBase } from '@preact/mdc/floating-label';
import { h } from 'preact';
import { LineRippleBase } from '@preact/mdc/line-ripple';
import { NotchedOutlineIdle, NotchedOutlineBase } from '@preact/mdc/notched-outline';
import {
	TextField,
	TextFieldHelperText,
	TextFieldInput,
	TextFieldIcon
} from '@preact/mdc/text-field';
import cx from 'classnames';

import '@material/textfield/mdc-text-field.scss';

import Showcase from '../../components/showcase';

import style from './style.scss';

function TextFieldHero() {
	return (
		<Showcase.Demo className={style['text-field-container']}>
			<TextField className={style['text-field']}>
				<TextFieldInput id="hero-text-field-id" />
				<FloatingLabelBase for="hero-text-field-id">Standard</FloatingLabelBase>
				<LineRippleBase />
			</TextField>
		</Showcase.Demo>
	);
}

function TextFieldContainer({ modifiers = {} }) {
	const idSuffix = Object.keys(modifiers).join('-');
	const label = modifiers.dense ? 'Dense' : 'Standard';
	const showFloatingLabel = !modifiers.fullwidth || modifiers.textarea;
	return (
		<div className={style['text-field-container']}>
			<TextField className={style['text-field']} modifiers={modifiers}>
				{modifiers['with-leading-icon'] && <TextFieldIcon>event</TextFieldIcon>}
				<TextFieldInput
					element={modifiers.textarea ? 'textarea' : 'input'}
					id={`text-field-${idSuffix}`}
					placeholder={showFloatingLabel ? '' : label}
				/>
				{showFloatingLabel && (
					<FloatingLabelBase for={`text-field-${idSuffix}`}>{label}</FloatingLabelBase>
				)}
				{modifiers['with-trailing-icon'] && <TextFieldIcon>delete</TextFieldIcon>}
				{!modifiers.outlined && !modifiers.textarea && <LineRippleBase />}
				{modifiers.outlined && <NotchedOutlineBase />}
				{modifiers.outlined && <NotchedOutlineIdle />}
			</TextField>
			{modifiers.helper && (
				<TextFieldHelperText modifiers={{ persistent: true, 'validation-msg': true }}>
					Helper Text
				</TextFieldHelperText>
			)}
		</div>
	);
}

function TextFieldRow({ className, modifiers }) {
	return (
		<Showcase.Demo className={cx(style['text-field-row'], className)}>
			<TextFieldContainer modifiers={modifiers} />
			<TextFieldContainer modifiers={{ dense: true, ...modifiers }} />
			<TextFieldContainer modifiers={{ helper: true, ...modifiers }} />
		</Showcase.Demo>
	);
}

function TextFieldDemos() {
	return (
		<div>
			<Showcase.Section>
				<Showcase.Section.Title>Standard</Showcase.Section.Title>
				<TextFieldRow />
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Box</Showcase.Section.Title>
				<TextFieldRow modifiers={{ box: true }} />
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Outlined</Showcase.Section.Title>
				<TextFieldRow modifiers={{ outlined: true }} />
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Box With Leading Icon</Showcase.Section.Title>
				<TextFieldRow modifiers={{ box: true, 'with-leading-icon': true }} />
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Box With Trailing Icon</Showcase.Section.Title>
				<TextFieldRow modifiers={{ box: true, 'with-trailing-icon': true }} />
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Outlined With Leading Icon</Showcase.Section.Title>
				<TextFieldRow modifiers={{ outlined: true, 'with-leading-icon': true }} />
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Outlined With Trailing Icon</Showcase.Section.Title>
				<TextFieldRow modifiers={{ outlined: true, 'with-trailing-icon': true }} />
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Textarea</Showcase.Section.Title>
				<TextFieldRow modifiers={{ textarea: true }} />
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Full Width</Showcase.Section.Title>
				<TextFieldRow
					className={style['text-field-row-fullwidth']}
					modifiers={{ fullwidth: true }}
				/>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Full Width Textarea</Showcase.Section.Title>
				<TextFieldRow
					className={style['text-field-row-fullwidth']}
					modifiers={{ fullwidth: true, textarea: true }}
				/>
			</Showcase.Section>
		</div>
	);
}

export default function TextFieldShowcase() {
	return (
		<Showcase
			title="Text Field"
			description="Text fields allow users to input, edit, and select text. Text fields typically reside in forms but can appear in other places, like dialog boxes and search."
			hero={<TextFieldHero />}
			guidelinesLink="https://material.io/design/components/text-fields.html"
			documentationLink="https://material.io/develop/web/components/input-controls/text-field/"
			sourceCodeLink="https://github.com/material-components/material-components-web/tree/master/packages/mdc-textfield"
			demoLink="https://material-components.github.io/material-components-web-catalog/#/component/text-field"
			demos={<TextFieldDemos />}
		/>
	);
}
