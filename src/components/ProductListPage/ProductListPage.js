import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  fetchProducts,
  selectAllProducts,
  selectStatus,
} from "../../store/productSlice";
import SearchBar from "./SearchBar/SearchBar";
import Loading from "../Shared/Loading/Loading";
import ProductList from "./ProductList/ProductList";
import NoProducts from "./ProductList/NoProducts/NoProducts";

import { BodyContainer, StyledButton } from "./styles.js";

function ProductListPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector(selectStatus);
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
      <StyledButton onClick={handleAddProduct}>Cadastrar Produto</StyledButton>
      {status == "pending" && <Loading />}
      {status == "fulfilled" && productList.length == 0 && <NoProducts />}
      {status == "fulfilled" && <ProductList products={productList} />}
    </BodyContainer>
  );
}

export default ProductListPage;
