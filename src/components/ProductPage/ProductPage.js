import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectProductById } from "../../store/productSlice";

function ProductPage() {
  let { id } = useParams();
  let product = useSelector((state) => selectProductById(state, parseInt(id)));

  return (
    <div>
      <div>{id}</div>
      <div>{product.name}</div>
      <div>{product.price}</div>
    </div>
  );
}

export default ProductPage;