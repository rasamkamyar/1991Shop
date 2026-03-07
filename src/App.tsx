import { Route, Routes } from "react-router-dom";
import { ProductsPage } from "./pages/ProductsPage";
import Layout from "./components/Layout";
import ProductsProvider from "./components/ProductsProvider";

const App = () => {
  return (
    <ProductsProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<ProductsPage />} />
        </Routes>
      </Layout>
    </ProductsProvider>
  );
};

export default App;
