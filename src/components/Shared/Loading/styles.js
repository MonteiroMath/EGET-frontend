import styled from "styled-components";

export const Container = styled.div`
  margin-top: ${(props) => props.marginTop || "50px"};
  display: flex;
  justify-content: center;
`;

export const Spinner = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(0, 0, 51, 0.8);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
