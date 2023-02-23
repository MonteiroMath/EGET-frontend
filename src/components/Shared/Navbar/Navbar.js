import { NavContainer, NavLink } from "./styles";

function Navbar() {
  return (
    <NavContainer>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
    </NavContainer>
  );
}

export default Navbar;
