import { NavContainer, NavLink } from "./styles";

function Navbar() {
  return (
    <NavContainer>
      <NavLink to="/">Início</NavLink>
      <NavLink to="/products">Produtos</NavLink>
    </NavContainer>
  );
}

export default Navbar;
