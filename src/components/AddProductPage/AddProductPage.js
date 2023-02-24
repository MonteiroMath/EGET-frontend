import { BodyContainer, Title } from "./styles";
import NewProductForm from "./NewProductForm/NewProductForm";

function AddProductPage() {
  return (
    <BodyContainer>
      <Title>Cadastrar Produto</Title>
      <NewProductForm />
    </BodyContainer>
  );
}

export default AddProductPage;
