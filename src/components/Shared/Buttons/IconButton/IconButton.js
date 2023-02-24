import { FlexImg, IconContainer } from "./styles";

function IconButton({ icon, handleClick }) {
  return (
    <IconContainer onClick={handleClick}>
      <FlexImg src={icon} />
    </IconContainer>
  );
}

export default IconButton;
