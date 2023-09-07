import { ModalProps } from './modal.d';

import './modal.styles.scss';

const baseClass = 'modal';

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
	if (!isOpen) return null;

	return (
		<div className={`${baseClass}`}>
			<div className={`${baseClass}-content`}>
				{children}
				<button className={`${baseClass}-close`} onClick={onClose}>
					Ok!
				</button>
			</div>
		</div>
	);
};

export default Modal;
