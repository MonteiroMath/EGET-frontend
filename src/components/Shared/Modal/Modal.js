import { ModalBody, ModalContainer, ModalContent, ModalFooter } from "./styles";

function Modal({ show, handleClose, content, handleConfirm }) {
  return show ? (
    <ModalContainer>
      <ModalBody>
        <ModalContent>{content}</ModalContent>
        <ModalFooter>
          <button onClick={handleClose}>Cancelar</button>
          <button onClick={handleConfirm}>Confirmar</button>
        </ModalFooter>
      </ModalBody>
    </ModalContainer>
  ) : null;
}

export default Modal;
