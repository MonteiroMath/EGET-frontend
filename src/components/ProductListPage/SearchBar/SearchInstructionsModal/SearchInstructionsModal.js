import Modal from "../../../Shared/Modal/Modal";

const modalContent = `-  Exemplos:\n
    nomeProduto - busca por nome
    name:nomeProduto - busca por nome - prefixo obrigatório em caso de busca com mais de um critério.
    cat:eletronicos - busca por categoria.
    min:4.99 - Preço mínimo da busca.
    max:50.00 - Preço máximo da busca.
    name: motorola; cat: eletronicos; min: 4.99 - Busca com múltiplos critérios deve usar o separador ";".`;

function SearchInstructionModal({ show, handleClose }) {
  return <Modal show={show} handleClose={handleClose} content={modalContent} />;
}

export default SearchInstructionModal;
