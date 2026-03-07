import { Col, Row } from "antd";
import ProductsCard from "../components/ProductsCard";
import { mockData } from "../services/mockData";
import { useProductsContext } from "../features/context/context";
import { useEffect } from "react";
// import type { Product } from "../features/types/types";
// import { useProducts } from "../features/hooks/useProducts";
// import type { Product } from "../features/types/types";

export const ProductsPage = () => {
  // const { data, isLoading, isError } = useProducts();
  // if (isLoading) return <p>Loading...</p>;
  // if (isError) return <p>Error...</p>;
  const { state } = useProductsContext();
  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <Row gutter={[16, 16]}>
      {mockData.map((product) => (
        <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
          <ProductsCard product={product} />
        </Col>
      ))}
    </Row>
  );
};
