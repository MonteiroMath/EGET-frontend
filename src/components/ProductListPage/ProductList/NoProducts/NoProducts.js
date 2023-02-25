import { Container } from "./styles";
import { AiOutlineWarning } from "react-icons/ai";

function NoProducts() {
  return (
    <Container>
      <AiOutlineWarning size={70} />
      <div>Não foram encontrados produtos</div>
    </Container>
  );
}

export default NoProducts;
