import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectProductById } from "../../store/productSlice";

function ProductPage() {
  let { id } = useParams();
  let product = useSelector((state) => selectProductById(state, parseInt(id)));

  const { name, category, price, quantity, description } = product;
  return (
    <div>
      <div>{id}</div>
      <div>{name}</div>
      <div>{price}</div>
    </div>
  );
}

export default ProductPage;
