import styled from "styled-components";

export const StyledForm = styled.form`
  margin: 20px 20px;
`;

export const FormGroup = styled.div`
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  width: 50%;
  grid-template-columns: 1fr;
  gap: 5px;

  @media screen and (min-width: 576px) {
    width: 60%;
    grid-template-columns: 1fr 2fr;
  }

  @media screen and (min-width: 768px) {
    width: 40%;
  }

  @media screen and (min-width: 992px) {
    width: 30%;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  column-gap: 10px;
`;
