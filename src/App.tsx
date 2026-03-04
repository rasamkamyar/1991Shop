import { Route, Routes } from "react-router-dom";
import { ProductsPage } from "./pages/ProductsPage";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
