import { IconContainer } from "./styles";

function IconButton({ handleClick, children }) {
  return <IconContainer onClick={handleClick}>{children}</IconContainer>;
}

export default IconButton;
