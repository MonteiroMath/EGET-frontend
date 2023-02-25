import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { fetchProducts, selectAllProducts } from "../../store/productSlice";
import SearchBar from "./SearchBar/SearchBar";
import ProductList from "./ProductList/ProductList";

import { BodyContainer } from "./styles.js";

function ProductListPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productList = useSelector(selectAllProducts);

  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.toString();

  //extract effect as custom hook
  useEffect(() => {
    dispatch(fetchProducts(searchTerm));
  }, [dispatch, searchTerm]);

  const handleAddProduct = useCallback(() => navigate("/addProduct"));

  return (
    <BodyContainer>
      <SearchBar />
      <button onClick={handleAddProduct}>Cadastrar Produto</button>
      <ProductList products={productList} />
    </BodyContainer>
  );
}

export default ProductListPage;
