import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Container } from "./styles";

import Navbar from "./components/Shared/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import ProductListPage from "./components/ProductListPage/ProductListPage";
import ProductPage from "./components/ProductPage/ProductPage";
import AddProductPage from "./components/AddProductPage/AddProductPage";
import Footer from "./components/Shared/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Container>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />

            <Route exact path="/products" element={<ProductListPage />} />

            <Route exact path="/products/:id" element={<ProductPage />} />

            <Route exact path="/addProduct" element={<AddProductPage />} />
          </Routes>
          <Footer />
        </Container>
      </Router>
    </>
  );
}

export default App;
