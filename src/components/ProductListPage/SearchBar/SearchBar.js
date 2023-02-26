import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Container, StyledForm, StyledInput, HelpButton } from "./styles";

import SearchInstructionModal from "./SearchInstructionsModal/SearchInstructionsModal";
import parseQuery from "./utils/parseQuery";

function SearchBar() {
  const navigate = useNavigate();
  
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);

  const toggleModal = useCallback(() => setShowModal(!showModal), [showModal]);
  const handleChange = (ev) => setSearchTerm(ev.target.value);

  const handleSubmit = useCallback(
    (ev) => {
      if (ev.key === "Enter") {
        ev.preventDefault();
        ev.stopPropagation();

        const query = parseQuery(searchTerm);
        navigate(`/products?${query}`);
      }
    },
    [navigate, searchTerm]
  );

  return (
    <>
      <Container>
        <StyledForm>
          <StyledInput
            placeholder="O que você procura?"
            value={searchTerm}
            onChange={handleChange}
            onKeyDown={handleSubmit}
          />
        </StyledForm>
        <HelpButton onClick={toggleModal}>?</HelpButton>
      </Container>
      <SearchInstructionModal show={showModal} handleClose={toggleModal} />
    </>
  );
}

export default SearchBar;
