import { AiOutlineDelete } from "react-icons/ai";
import IconButton from "../IconButton/IconButton";

function DeleteButton({ handleClick }) {
  return (
    <IconButton handleClick={handleClick}>
      <AiOutlineDelete size={24} />
    </IconButton>
  );
}

export default DeleteButton;
