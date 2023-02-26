import { Container, Spinner } from "./styles";

function Loading({ marginTop }) {
  //spinner simples para indicar que o sistema está aguardando resposta do backend
  return (
    <Container marginTop={marginTop}>
      <Spinner />{" "}
    </Container>
  );
}

export default Loading;
