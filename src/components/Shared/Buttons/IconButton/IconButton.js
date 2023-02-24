import { FlexImg, IconContainer } from "./styles";

function IconButton({ icon, handleClick }) {
  console.log(icon);
  return (
    <IconContainer onClick={handleClick}>
      <FlexImg src={icon} />
    </IconContainer>
  );
}

export default IconButton;
