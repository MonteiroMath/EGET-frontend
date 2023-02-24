import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  display: grid;

  row-gap: 20px;
  justify-items: center;

  @media screen and (min-width: 536px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 25px;
  }
`;
