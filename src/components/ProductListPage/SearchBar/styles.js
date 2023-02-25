import styled from "styled-components";

export const Container = styled.div`
  padding: 50px 0;

  border-bottom: 2px solid #eee;
  margin-bottom: 30px;
`;

export const StyledForm = styled.form`
  width: 100%;
  text-align: center;
`;

export const StyledInput = styled.input`
  width: 60%;
  height: 30px;
  padding: 5px;
  border-radius: 5px;
  border: solid 2px #eee;

  @media screen and (min-width: 576px) {
    width: 50%;
  }

  @media screen and (min-width: 768px) {
    width: 40%;
  }

  @media screen and (min-width: 992px) {
    width: 300px;
  }
`;
