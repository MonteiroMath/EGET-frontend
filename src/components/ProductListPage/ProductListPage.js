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
  //Componente principal da página de lista de Produtos

  //inicialização de hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector(selectStatus);

  //obtenção da lista de produtos
  const productList = useSelector(selectAllProducts);

  //efeito para inicialização do store redux
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  //Callback para navegação para a página de adição de produtos
  const handleAddProduct = () => navigate("/addProduct");

  //Callback para repopular o store redux quando uma busca por realizada
  const handleSearch = (searchTerm) => dispatch(fetchProducts(searchTerm));

  return (
    <BodyContainer>
      <SearchBar handleSearch={handleSearch} />
      <NewProductButton onClick={handleAddProduct}>
        Cadastrar Produto
      </NewProductButton>
      {/*Navegação condicional conforme o status da requisição ao backend*/}
      {status === "pending" && <Loading />}
      {status === "fulfilled" && productList.length === 0 && <NoProducts />}
      {status === "fulfilled" && <ProductList products={productList} />}
    </BodyContainer>
  );
}

export default ProductListPage;
