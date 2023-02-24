import plusIcon from "./img/plus.png";

import IconButton from "../IconButton/IconButton";

function SeeMoreButton({ handleClick }) {
  return <IconButton icon={plusIcon} handleClick={handleClick} />;
}

export default SeeMoreButton;
