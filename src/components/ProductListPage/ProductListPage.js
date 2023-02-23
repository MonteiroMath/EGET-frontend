import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectAllProducts } from "../../store/productSlice";

function ProductListPage() {
  const dispatch = useDispatch();
  const productList = useSelector(selectAllProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const productItems = productList.map((product) => (
    <div key={product.id}>{product.name}</div>
  ));

  return (
    <div className="App">
      {productItems.length !== 0 ? productItems : <div>No products found</div>}
    </div>
  );
}

export default ProductListPage;
