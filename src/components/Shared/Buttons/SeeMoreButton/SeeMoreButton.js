import { BiDotsHorizontalRounded } from "react-icons/bi";

import IconButton from "../IconButton/IconButton";

function SeeMoreButton({ handleClick }) {
  return (
    <IconButton handleClick={handleClick}>
      <BiDotsHorizontalRounded size={24} />
    </IconButton>
  );
}

export default SeeMoreButton;
