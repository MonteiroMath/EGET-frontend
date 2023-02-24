import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBody = styled.div`
  width: 500px;
  border-radius: 15px;
  overflow: hidden;
  background-color: #fff;
`;

export const ModalContent = styled.div`
  padding: 30px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`;

export const ModalFooter = styled.div`
  padding: 20px;

  display: flex;
  justify-content: center;
  gap: 20px;
`;
