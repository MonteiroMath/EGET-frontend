import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  border-radius: 8px;
  padding: 10px;
  background-color: ${(props) => (props.disabled ? "grey" : "#1D1D61")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  color: white;
  font-weight: bold;
`;
