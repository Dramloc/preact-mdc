import { h, Component } from 'preact';
import { MDCDialog } from '@material/dialog';
import { strings } from '@material/dialog/constants';

import { Base } from '../mdc-base';
import { Button } from '../mdc-button';

// FIXME: use higher order components
export class Dialog extends Component {
	onAccept = e => {
		if (this.props.onAccept) {
			this.props.onAccept(e);
		}
	};
	onCancel = e => {
		if (this.props.onCancel) {
			this.props.onCancel(e);
		}
	};
	componentDidMount() {
		this.MDCComponent = new MDCDialog(this.__root.base);
		this.MDCComponent.listen(strings.ACCEPT_EVENT, this.onAccept);
		this.MDCComponent.listen(strings.CANCEL_EVENT, this.onCancel);
	}
	componentWillUnmount() {
		this.MDCComponent.unlisten(strings.ACCEPT_EVENT, this.onAccept);
		this.MDCComponent.unlisten(strings.CANCEL_EVENT, this.onCancel);
		this.MDCComponent.destroy();
	}
	render(props) {
		return (
			<Base
				ref={ref => (this.__root = ref)}
				element="aside"
				role="alertdialog"
				classes={{ name: 'mdc-dialog', modifiers: ['open', 'animating'] }}
				{...props}
			/>
		);
	}
}

export function DialogSurface(props) {
	return <Base element="div" classes={{ name: 'mdc-dialog__surface' }} {...props} />;
}

export function DialogBackdrop(props) {
	return <Base element="div" classes={{ name: 'mdc-dialog__backdrop' }} {...props} />;
}

export function DialogHeader(props) {
	return <Base element="header" classes={{ name: 'mdc-dialog__header' }} {...props} />;
}

export function DialogHeaderTitle(props) {
	return <Base element="h2" classes={{ name: 'mdc-dialog__header__title' }} {...props} />;
}

export function DialogBody(props) {
	return (
		<Base
			element="section"
			classes={{ name: 'mdc-dialog__body', modifiers: ['scrollable'] }}
			{...props}
		/>
	);
}

export function DialogFooter(props) {
	return <Base element="footer" classes={{ name: 'mdc-dialog__footer' }} {...props} />;
}

export function DialogFooterButton(props) {
	return (
		<Base
			element={Button}
			classes={{
				name: 'mdc-dialog__footer__button',
				modifiers: ['cancel', 'accept']
			}}
			{...props}
		/>
	);
}
