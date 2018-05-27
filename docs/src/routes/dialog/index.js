import { Button } from '../../../../src/button';
import {
	Dialog,
	DialogSurface,
	DialogHeader,
	DialogHeaderTitle,
	DialogBody,
	DialogFooter,
	DialogFooterButton,
	DialogBackdrop
} from '../../../../src/dialog';
import { h, Component } from 'preact';
import { Typography } from '../../../../src/typography';

import '@material/button/mdc-button.scss';
import '@material/dialog/mdc-dialog.scss';

import Showcase from '../../components/showcase';

import style from './style.scss';

function DialogHero() {
	return (
		<Showcase.Demo>
			<Dialog
				id="my-mdc-dialog"
				className={style['demo-dialog']}
				aria-labelledby="my-mdc-dialog-label"
				aria-describedby="my-mdc-dialog-description"
				modifiers={{ open: true }}
			>
				<DialogSurface>
					<DialogHeader>
						<DialogHeaderTitle id="my-mdc-dialog-label">Get this party started?</DialogHeaderTitle>
					</DialogHeader>
					<DialogBody id="my-mdc-dialog-description">
						Turn up the jams and have a good time.
					</DialogBody>
					<DialogFooter>
						<DialogFooterButton modifiers={{ cancel: true }}>Decline</DialogFooterButton>
						<DialogFooterButton modifiers={{ accept: true }}>Accept</DialogFooterButton>
					</DialogFooter>
				</DialogSurface>
			</Dialog>
		</Showcase.Demo>
	);
}

class DialogDemos extends Component {
	state = {
		accepted: undefined
	};

	open = () => this.dialog.MDCComponent.show();

	onAccept = () => {
		this.setState({ accepted: true });
	};

	onCancel = () => {
		this.setState({ accepted: false });
	};

	render(_, { accepted }) {
		return (
			<Showcase.Demo>
				<Dialog
					ref={ref => (this.dialog = ref)}
					id="mdc-dialog-with-list"
					aria-labelledby="mdc-dialog-with-list-label"
					aria-describedby="mdc-dialog-with-list-description"
					onAccept={this.onAccept}
					onCancel={this.onCancel}
				>
					<DialogSurface>
						<DialogHeader>
							<DialogHeaderTitle id="mdc-dialog-with-list-label">Read my novel?</DialogHeaderTitle>
						</DialogHeader>
						<DialogBody id="mdc-dialog-with-list-description" modifiers={{ scrollable: true }}>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, incidunt.
								Debitis, repudiandae dignissimos et quam velit autem mollitia tenetur, eligendi
								rerum repellendus, explicabo ad aperiam vel ipsam! Exercitationem, voluptates
								molestiae.
							</p>
							<p>
								Iusto reiciendis mollitia ab commodi. Animi maiores nesciunt officia enim corrupti
								officiis consequuntur vel, consectetur eveniet ad dolorum reprehenderit similique
								qui deleniti ut sed explicabo id error at. Laudantium, excepturi!
							</p>
							<p>
								Suscipit quam laboriosam animi quasi similique voluptatem molestiae voluptas sint
								itaque, labore eos, maiores harum qui totam libero amet nisi? Similique nihil
								veritatis aspernatur molestias accusantium, eius dolorum autem optio?
							</p>
							<p>
								Cum eligendi consequuntur voluptas. Repellat nisi commodi numquam aliquam quasi
								tenetur obcaecati, animi cum eum. Facilis esse cupiditate fugiat, quod eveniet,
								inventore impedit nam ex tempore harum laudantium provident assumenda.
							</p>
							<p>
								Ut iste aperiam excepturi rerum consectetur illo officiis quo sed sunt labore earum
								soluta tempore omnis a, enim maiores non? Facilis qui alias sunt veniam esse hic.
								Aut, ducimus aliquid!
							</p>
							<p>
								Qui quaerat saepe sunt earum nihil porro, sint quibusdam, id eos vero asperiores
								dolorem iusto dolore illo, architecto fuga? Voluptates distinctio eligendi nihil
								provident accusantium. Maxime ullam ratione officia non.
							</p>
							<p>
								Molestiae sapiente quae nulla. Voluptates quibusdam numquam earum vero deserunt in,
								cum tenetur accusamus ipsum minus veniam libero quasi fuga dolorem laudantium error
								quo et accusantium neque vitae aliquam tempore.
							</p>
							<p>
								Optio asperiores quisquam odit eaque incidunt laboriosam repudiandae ex eum iure
								quia, id vero atque perspiciatis, officiis quaerat aut ut dolorem libero eos
								perferendis ducimus! Veritatis nam libero tempora maxime?
							</p>
							<p>
								Sapiente reiciendis quis eveniet iure dicta perferendis quos consectetur, soluta
								sunt, labore ipsam inventore maiores laudantium recusandae deleniti autem animi
								consequatur, voluptatem sint. Dignissimos minima labore earum vitae ad non!
							</p>
							<p>
								Cum ex totam dolore officiis maiores quidem necessitatibus consequatur molestias
								culpa, quas, aperiam tempora et! Dolorem, voluptates dignissimos? Voluptatem
								voluptatibus expedita, error ducimus distinctio necessitatibus laudantium officiis
								dolorum nam vitae?
							</p>
						</DialogBody>
						<DialogFooter>
							<DialogFooterButton modifiers={{ cancel: true }}>Decline</DialogFooterButton>
							<DialogFooterButton modifiers={{ accept: true }}>Accept</DialogFooterButton>
						</DialogFooter>
					</DialogSurface>
					<DialogBackdrop />
				</Dialog>
				<Button onClick={this.open}>Open dialog</Button>
				{accepted !== undefined && (
					<Typography element="p" modifiers={{ body1: true }}>
						{accepted
							? 'Accepted reading my novel, thanks!'
							: 'Declined to read my novel... Maybe next time?'}
					</Typography>
				)}
			</Showcase.Demo>
		);
	}
}

export default function DialogShowcase() {
	return (
		<Showcase
			title="Dialog"
			description="Dialogs inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks."
			hero={<DialogHero />}
			guidelinesLink="https://material.io/design/components/dialogs.html"
			documentationLink="https://material.io/components/web/catalog/dialogs/"
			sourceCodeLink="https://github.com/material-components/material-components-web/tree/master/packages/mdc-dialog"
			demoLink="https://material-components.github.io/material-components-web-catalog/#/component/dialog"
			demos={<DialogDemos />}
		/>
	);
}
