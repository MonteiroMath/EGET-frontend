import { Container } from "./styles.js";
import ProductCard from "./ProductCard/ProductCard";

function ProductList({ products }) {
  const productItems = products.map((product) => (
    <ProductCard product={product} />
  ));

  return (
    <Container>
      {productItems.length !== 0 ? productItems : <div>No products found</div>}
    </Container>
  );
}

export default ProductList;

/*
<Link key={`product-${product.id}`} to={`/products/${product.id}`}>
      {product.name}
    </Link>
*/
