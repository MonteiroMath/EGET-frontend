import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts, selectAllProducts } from "../../store/productSlice";

function ProductListPage() {
  const dispatch = useDispatch();
  const productList = useSelector(selectAllProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const productItems = productList.map((product) => (
    <Link key={product.id} to={`/products/${product.id}`}>
      {product.name}
    </Link>
  ));

  return (
    <div className="App">
      {productItems.length !== 0 ? productItems : <div>No products found</div>}
    </div>
  );
}

export default ProductListPage;
