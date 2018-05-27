import { h } from 'preact';
import { LayoutGrid, LayoutGridCell, LayoutGridInner } from '@preact/mdc/layout-grid';
import cx from 'classnames';

import '@material/layout-grid/mdc-layout-grid.scss';

import Showcase from '../../components/showcase';

import style from './style.scss';

function LayoutGridHero() {
	return (
		<Showcase.Demo>
			<LayoutGrid className={style['demo-grid']}>
				<LayoutGridInner>
					<LayoutGridCell className={style['demo-cell']} />
					<LayoutGridCell className={style['demo-cell']} />
					<LayoutGridCell className={style['demo-cell']} />
				</LayoutGridInner>
			</LayoutGrid>
		</Showcase.Demo>
	);
}

function LayoutGridDemos() {
	return (
		<div>
			<Showcase.Section>
				<Showcase.Section.Title>Columns</Showcase.Section.Title>
				<Showcase.Demo>
					<LayoutGrid className={style['demo-grid']}>
						<LayoutGridInner>
							<LayoutGridCell className={style['demo-cell']} modifiers={{ span: 6 }} />
							<LayoutGridCell className={style['demo-cell']} modifiers={{ span: 3 }} />
							<LayoutGridCell className={style['demo-cell']} modifiers={{ span: 2 }} />
							<LayoutGridCell className={style['demo-cell']} modifiers={{ span: 1 }} />
							<LayoutGridCell className={style['demo-cell']} modifiers={{ span: 3 }} />
							<LayoutGridCell className={style['demo-cell']} modifiers={{ span: 1 }} />
							<LayoutGridCell className={style['demo-cell']} modifiers={{ span: 8 }} />
						</LayoutGridInner>
					</LayoutGrid>
				</Showcase.Demo>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Grid Left Alignment</Showcase.Section.Title>
				<Showcase.Section.Subtitle>
					This requires a max-width on the top-level grid element.
				</Showcase.Section.Subtitle>
				<Showcase.Demo>
					<LayoutGrid
						modifiers={{ 'align-left': true }}
						className={cx(style['demo-grid'], style['demo-grid--alignment'])}
					>
						<LayoutGridInner>
							<LayoutGridCell className={style['demo-cell']} />
							<LayoutGridCell className={style['demo-cell']} />
							<LayoutGridCell className={style['demo-cell']} />
						</LayoutGridInner>
					</LayoutGrid>
				</Showcase.Demo>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Right Alignment</Showcase.Section.Title>
				<Showcase.Section.Subtitle>
					This requires a max-width on the top-level grid element.
				</Showcase.Section.Subtitle>
				<Showcase.Demo>
					<LayoutGrid
						modifiers={{ 'align-right': true }}
						className={cx(style['demo-grid'], style['demo-grid--alignment'])}
					>
						<LayoutGridInner>
							<LayoutGridCell className={style['demo-cell']} />
							<LayoutGridCell className={style['demo-cell']} />
							<LayoutGridCell className={style['demo-cell']} />
						</LayoutGridInner>
					</LayoutGrid>
				</Showcase.Demo>
			</Showcase.Section>
			<Showcase.Section>
				<Showcase.Section.Title>Cell Alignment</Showcase.Section.Title>
				<Showcase.Section.Subtitle>
					Cell alignment requires a cell height smaller than the inner height of the grid.
				</Showcase.Section.Subtitle>
				<Showcase.Demo>
					<LayoutGrid
						modifiers={{ 'align-right': true }}
						className={cx(style['demo-grid'], style['demo-grid--cell-alignment'])}
					>
						<LayoutGridInner className={style['demo-inner']}>
							<LayoutGridCell
								className={cx(style['demo-cell'], style['demo-cell--alignment'])}
								modifiers={{ 'align-top': true }}
							/>
							<LayoutGridCell
								className={cx(style['demo-cell'], style['demo-cell--alignment'])}
								modifiers={{ 'align-middle': true }}
							/>
							<LayoutGridCell
								className={cx(style['demo-cell'], style['demo-cell--alignment'])}
								modifiers={{ 'align-bottom': true }}
							/>
						</LayoutGridInner>
					</LayoutGrid>
				</Showcase.Demo>
			</Showcase.Section>
		</div>
	);
}

export default function LayoutGridShowcase() {
	return (
		<Showcase
			title="Layout Grid"
			description="Material design’s responsive UI is based on a 12-column grid layout."
			hero={<LayoutGridHero />}
			guidelinesLink="https://material.io/develop/web/components/layout-grid/"
			documentationLink="https://material.io/components/web/catalog/layout-grid/"
			sourceCodeLink="https://github.com/material-components/material-components-web/tree/master/packages/mdc-layout-grid"
			demoLink="https://material-components.github.io/material-components-web-catalog/#/component/layout-grid"
			demos={<LayoutGridDemos />}
		/>
	);
}
