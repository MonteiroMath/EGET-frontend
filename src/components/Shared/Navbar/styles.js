import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.nav`
  position: fixed;

  width: 100%;
  padding: 2vh 0 2vh 4vw;

  display: flex;
  justify-contend: flex-start;
  align-items: center;
  column-gap: 20px;

  background: rgba(0, 0, 0, 50%);
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
