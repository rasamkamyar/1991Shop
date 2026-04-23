import { Route, Routes } from "react-router-dom";
import { ProductsPage } from "./pages/ProductsPage";
import ProductsProvider from "./components/ProductsProvider";
import CheckOutPage from "./pages/CheckOutPage";
import DetailsPage from "./pages/DetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <ProductsProvider>
      <Layout>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/chechout" element={<CheckOutPage />} />
          <Route path="/products/:id" element={<DetailsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </ProductsProvider>
  );
};

export default App;
