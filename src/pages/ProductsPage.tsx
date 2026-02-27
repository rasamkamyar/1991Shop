import { Col, Row } from "antd";
import ProductsCard from "../components/ProductsCard";
import { useProducts } from "../features/hooks/useProducts";
import type { Product } from "../features/types/types";

export const ProductsPage = () => {
  const { data, isLoading, isError } = useProducts();
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;
  return (
    <Row gutter={[16, 16]}>
      {data?.map((product: Product) => (
        <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
          <ProductsCard product={product} />
        </Col>
      ))}
    </Row>
  );
};
