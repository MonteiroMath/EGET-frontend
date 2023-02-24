import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProducts, selectAllProducts } from "../../store/productSlice";
import ProductList from "./ProductList/ProductList";

import { BodyContainer } from "./styles.js";

function ProductListPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productList = useSelector(selectAllProducts);

  //extract effect as custom hook
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddProduct = useCallback(() => navigate("/addProduct"));

  return (
    <BodyContainer>
      <div>searchBar</div>
      <button onClick={handleAddProduct}>Cadastrar Produto</button>
      <ProductList products={productList} />
    </BodyContainer>
  );
}

export default ProductListPage;
