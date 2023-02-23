import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectAllProducts } from "../../store/productSlice";
import ProductList from "./ProductList/ProductList";

import { BodyContainer } from "./styles.js";

function ProductListPage() {
  const dispatch = useDispatch();
  const productList = useSelector(selectAllProducts);

  //extract effect as custom hook
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <BodyContainer>
      <div>searchBar</div>
      <ProductList products={productList} />
    </BodyContainer>
  );
}

export default ProductListPage;
