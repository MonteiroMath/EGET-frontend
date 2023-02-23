import { Container } from "./styles.js";
import { Link } from "react-router-dom";

function ProductList({ products }) {
  const productItems = products.map((product) => (
    <Link key={`product-${product.id}`} to={`/products/${product.id}`}>
      {product.name}
    </Link>
  ));

  return (
    <Container>
      {productItems.length !== 0 ? productItems : <div>No products found</div>}
    </Container>
  );
}

export default ProductList;
