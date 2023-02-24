import deleteIcon from "./img/delete.png";

import IconButton from "../IconButton/IconButton";

function DeleteButton({ handleClick }) {
  return <IconButton icon={deleteIcon} handleClick={handleClick} />;
}

export default DeleteButton;
