import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 30px;

  padding: 30px 0;

  border-bottom: 2px solid #eee;
  margin-bottom: 30px;
`;

export const StyledForm = styled.form`
  width: 60%;
  text-align: center;

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

export const StyledInput = styled.input`
  width: 100%;
  height: 20px;
  padding: 5px;
  border-radius: 5px;
  border: solid 2px #eee;
`;

export const HelpButton = styled.button`
  border: none;
  border-radius: 100%;
  width: 30px;
  height: 30px;
  background-color: #80669d;
  cursor: pointer;
  color: white;
  font-weight: bold;
`;
