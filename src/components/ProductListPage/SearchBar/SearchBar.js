import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Container, StyledForm, StyledInput, HelpButton } from "./styles";

import Modal from "../../Shared/Modal/Modal";

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
    if (bufferQuery[0]) processedQuery["name"] = bufferQuery[0].trim();
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

const modalContent = `-  Exemplos:\n
    nomeProduto - busca por nome
    name:nomeProduto - busca por nome - prefixo obrigatório em caso de busca com mais de um critério.
    cat:eletronicos - busca por categoria.
    min:4.99 - Preço mínimo da busca.
    max:50.00 - Preço máximo da busca.
    name: motorola; cat: eletronicos; min: 4.99 - Busca com múltiplos critérios deve usar o separador ";".`;

function SearchBar() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState("");

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
      <Modal
        show={showModal}
        handleClose={toggleModal}
        content={modalContent}
      />
    </>
  );
}

export default SearchBar;
