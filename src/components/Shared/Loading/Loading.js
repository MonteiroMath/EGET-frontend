import { Container, Spinner } from "./styles";

function Loading({ marginTop }) {
  return (
    <Container marginTop={marginTop}>
      <Spinner />{" "}
    </Container>
  );
}

export default Loading;
