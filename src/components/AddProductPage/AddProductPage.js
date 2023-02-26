import { BodyContainer, Title } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import {
  postProduct,
  updateProduct,
  selectProductById,
} from "../../store/productSlice";
import { useNavigate, useParams } from "react-router-dom";

import NewProductForm from "./NewProductForm/NewProductForm";

function AddProductPage({ edit }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const { id } = params;
  const action = edit ? updateProduct : postProduct;

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

  return (
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
