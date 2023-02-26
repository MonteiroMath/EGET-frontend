import { Container } from "./styles.js";
import ProductCard from "./ProductCard/ProductCard";

function ProductList({ products }) {
  //componente responsável pela renderização da lista de cartões de produtos
  const productItems = products.map((product) => (
    <ProductCard key={`product-${product.id}`} product={product} />
  ));

  return <Container>{productItems}</Container>;
}

export default ProductList;
