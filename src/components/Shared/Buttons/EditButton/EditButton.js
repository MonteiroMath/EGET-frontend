import { AiOutlineEdit } from "react-icons/ai";
import IconButton from "../IconButton/IconButton";

function EditButton({ handleClick }) {
  return (
    <IconButton handleClick={handleClick}>
      <AiOutlineEdit size={24} />
    </IconButton>
  );
}

export default EditButton;
