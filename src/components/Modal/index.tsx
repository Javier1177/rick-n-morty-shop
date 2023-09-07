import { ModalProps } from './modal.d';

import './modal.styles.scss';

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
	if (!isOpen) return null;

	return (
		<div className="modal">
			<div className="modal-content">
				{children}
				<button className="modal-close" onClick={onClose}>
					Cierra
				</button>
			</div>
		</div>
	);
};

export default Modal;
