import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchProducts,
  selectAllProducts,
  selectStatus,
} from "../../store/productSlice";
import SearchBar from "./SearchBar/SearchBar";
import Loading from "../Shared/Loading/Loading";
import ProductList from "./ProductList/ProductList";
import NoProducts from "./ProductList/NoProducts/NoProducts";

import { BodyContainer, NewProductButton } from "./styles.js";

function ProductListPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector(selectStatus);
  const productList = useSelector(selectAllProducts);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  const handleAddProduct = () => navigate("/addProduct");
  const handleSearch = (searchTerm) => dispatch(fetchProducts(searchTerm));

  return (
    <BodyContainer>
      <SearchBar handleSearch={handleSearch} />
      <NewProductButton onClick={handleAddProduct}>
        Cadastrar Produto
      </NewProductButton>
      {status === "pending" && <Loading />}
      {status === "fulfilled" && productList.length === 0 && <NoProducts />}
      {status === "fulfilled" && <ProductList products={productList} />}
    </BodyContainer>
  );
}

export default ProductListPage;
