import {
  ModalBody,
  ModalContainer,
  ModalContent,
  ModalFooter,
  StyledButton,
} from "./styles";

function Modal({ show, handleClose, content, handleConfirm }) {
  return show ? (
    <ModalContainer>
      <ModalBody>
        <ModalContent>{content}</ModalContent>
        <ModalFooter>
          <StyledButton onClick={handleClose}>Voltar</StyledButton>
          {handleConfirm && (
            <StyledButton onClick={handleConfirm}>Confirmar</StyledButton>
          )}
        </ModalFooter>
      </ModalBody>
    </ModalContainer>
  ) : null;
}

export default Modal;
