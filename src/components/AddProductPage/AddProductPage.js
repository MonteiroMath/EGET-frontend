import { BodyContainer, Title } from "./styles";
import NewProductForm from "./NewProductForm/NewProductForm";

function AddProductPage({ edit }) {
  return (
    <BodyContainer>
      <Title>{edit ? "Editar Produto" : "Cadastrar Produto"}</Title>
      <NewProductForm edit={edit} />
    </BodyContainer>
  );
}

export default AddProductPage;
