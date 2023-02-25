import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Container, StyledForm, StyledInput } from "./styles";

function parseQuery(searchTerm) {
  /* 

    quick cases:
        moto - search for name
        name:moto - search for name
        cat:eletronicos - search for eletronics
        min:4.99 - min price
        max:50.00 - max price
        name: moto; cat: eletronicos; min: 4.99 - multiple parameter search
    */

  const validKeys = ["name", "cat", "min", "max"];
  let bufferQuery = searchTerm.trim().split(";");

  const processedQuery = {};

  if (bufferQuery.length === 1 && !bufferQuery[0].includes(":")) {
    processedQuery["name"] = bufferQuery[0].trim();
  } else {
    bufferQuery.forEach((term) => {
      let [key, value] = term.split(":");

      key = key.trim();
      if (
        value &&
        validKeys.includes(key) &&
        !processedQuery.hasOwnProperty(key)
      ) {
        processedQuery[key] = value.trim();
      }
    });
  }

  return new URLSearchParams(processedQuery).toString();
}

function SearchBar() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = useCallback((ev) => setSearchTerm(ev.target.value));

  const handleSubmit = useCallback(
    (ev) => {
      if (ev.key === "Enter") {
        ev.preventDefault();
        ev.stopPropagation();

        const query = parseQuery(searchTerm);
        navigate(`/products?${query}`);
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
