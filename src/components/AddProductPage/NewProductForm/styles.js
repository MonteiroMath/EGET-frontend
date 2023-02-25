import styled from "styled-components";

export const StyledForm = styled.form`
  width: 60vw;
  margin: 30px 0;
  padding: 20px 0;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.5);
`;

export const FormGroup = styled.div`
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  width: 60%;
  grid-template-columns: 1fr;
  align-items: center;
  gap: 5px;

  @media screen and (min-width: 576px) {
    width: 80%;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 768px) {
    width: 70%;
  }

  @media screen and (min-width: 992px) {
    width: 60%;
  }
`;

export const StyledInput = styled.input`
  height: 20px;
  padding: 5px;
  border-radius: 5px;
  border: solid 2px #eee;
`;

export const ErrorContainer = styled.div`
  color: red;
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
  background-color: ${(props) => (props.disabled ? "grey" : "#80669d")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  color: white;
  font-weight: bold;
`;
