import styled from "styled-components";

export const StyledForm = styled.form`
  width: 60vw;
  margin: 30px 0;
  padding: 20px 0;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.5);
`;

export const ButtonContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  column-gap: 10px;
`;

export const StyledButton = styled.button`
  border: none;
  border-radius: 8px;
  padding: 10px;
  background-color: ${(props) => (props.disabled ? "grey" : "#55c2da")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  color: white;
  font-weight: bold;
`;
