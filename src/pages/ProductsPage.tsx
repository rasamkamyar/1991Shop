import { Col, Row } from "antd";
import ProductsCard from "../components/ProductsCard";
import { useProducts } from "../features/hooks/useProducts";
import type { Product } from "../features/types/types";

export const ProductsPage = () => {
  // const { data, isLoading, isError } = useProducts();
  // if (isLoading) return <p>Loading...</p>;
  // if (isError) return <p>Error...</p>;
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

const mockData = [
  { id: 1, title: "A", price: 1 },
  { id: 2, title: "B", price: 2 },
  { id: 3, title: "C", price: 3 },
  { id: 4, title: "D", price: 4 },
  { id: 5, title: "E", price: 5 },
  { id: 6, title: "F", price: 6 },
  { id: 7, title: "G", price: 7 },
  { id: 8, title: "H", price: 8 },

];
