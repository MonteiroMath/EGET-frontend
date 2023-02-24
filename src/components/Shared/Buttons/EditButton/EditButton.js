import editIcon from "./img/edit.png";

import IconButton from "../IconButton/IconButton";

function EditButton({ handleClick }) {
  return <IconButton icon={editIcon} handleClick={handleClick} />;
}

export default EditButton;
