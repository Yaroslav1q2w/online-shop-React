import { Button } from "@mui/material";
import { ModalContainer, ModalWrapp, ButtonContainer } from "./StyledModal";

const Modal = ({ text, onClick }) => {
	return (
		<ModalContainer>
			<ModalWrapp onClick={(e) => e.stopPropagation()}>
				<div className="modal__content">
					<hr />
					{text}
				</div>
				<ButtonContainer>
					<Button
						size="medium"
						variant="outlined"
						onClick={() => {
							onClick();
						}}
					>
						Ok
					</Button>
				</ButtonContainer>
			</ModalWrapp>
		</ModalContainer>
	);
};

export default Modal;
