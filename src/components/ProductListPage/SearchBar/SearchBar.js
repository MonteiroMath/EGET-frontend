import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Container, StyledForm, StyledInput } from "./styles";

function SearchBar() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = useCallback((ev) => setSearchTerm(ev.target.value));

  const handleSubmit = useCallback(
    (ev) => {
      if (ev.key === "Enter") {
        ev.preventDefault();
        ev.stopPropagation();
        navigate(`/products?searchTerm=${searchTerm}`);
      }
    },
    [searchTerm]
  );

  return (
    <Container>
      <StyledForm>
        <StyledInput
          placeholder="O que você procura?"
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={handleSubmit}
        />
      </StyledForm>
    </Container>
  );
}

export default SearchBar;

/*

<Form.Control
    className={styles.form}
    type="text"
    placeholder="O que você procura?"
    value={searchTerm}
    onChange={(ev) => setSearchTerm(ev.target.value)}
    onKeyDown={(ev) => {
      if (ev.key === "Enter") {
        ev.preventDefault();
        ev.stopPropagation();
        router.push(`/blog/search?searchTerm=${searchTerm}`);
      }
    }}
  />

*/
