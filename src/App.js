import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage/HomePage";
import ProductListPage from "./components/ProductListPage/ProductListPage";
import ProductPage from "./components/ProductPage/ProductPage";
import AddProductPage from "./components/AddProductPage/AddProductPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />

        <Route exact path="/products" element={<ProductListPage />} />

        <Route exact path="/products/:id" element={<ProductPage />} />

        <Route exact path="/addProduct" element={<AddProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
