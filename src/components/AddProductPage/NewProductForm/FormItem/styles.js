import styled from "styled-components";

export const FormGroup = styled.div`
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  width: 60%;
  grid-template-columns: 1fr;
  align-items: center;
  gap: 5px;

  color: white;

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
  padding: 10px;
  color: red;
  font-weight: bold;
  grid-column-end: span 2;
`;
