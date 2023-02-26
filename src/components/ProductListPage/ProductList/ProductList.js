import { Container } from "./styles.js";
import ProductCard from "./ProductCard/ProductCard";

function ProductList({ products }) {
  const productItems = products.map((product) => (
    <ProductCard key={`product-${product.id}`} product={product} />
  ));

  return <Container>{productItems}</Container>;
}

export default ProductList;
