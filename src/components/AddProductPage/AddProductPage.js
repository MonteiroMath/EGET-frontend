import { BodyContainer, Title } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import {
  postProduct,
  updateProduct,
  selectStatus,
  selectProductById,
} from "../../store/productSlice";
import { useNavigate, useParams } from "react-router-dom";

import Loading from "../Shared/Loading/Loading";
import NewProductForm from "./NewProductForm/NewProductForm";

function AddProductPage({ edit }) {
  //Componente principal da página de adição de produtos
  //Contém lógica adicional para permitir reutilização para edição de produtos

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const { id } = params;

  //define a ação para despachar ao store redux em caso de edição ou adição de produto
  const action = edit ? updateProduct : postProduct;

  const status = useSelector(selectStatus);

  //busca produto para edição. Obtém undefined caso se trate de adição.
  const product = useSelector((state) =>
    selectProductById(state, parseInt(id))
  );

  const handleReturn = (event) => {
    event.preventDefault();
    navigate("/products");
  };

  const handleSubmit = (event, formState) => {
    event.preventDefault();

    dispatch(
      action({
        id,
        ...formState,
      })
    ).then(() => navigate("/products"));
  };

  return status === "pending" ? (
    <Loading marginTop={"150px"} />
  ) : (
    <BodyContainer>
      <Title>{edit ? "Editar Produto" : "Cadastrar Produto"}</Title>
      <NewProductForm
        product={product}
        handleReturn={handleReturn}
        handleSubmit={handleSubmit}
      />
    </BodyContainer>
  );
}

export default AddProductPage;
