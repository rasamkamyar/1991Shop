import { Card, Row } from "antd";
import type { Product } from "../features/types/types";

interface Props {
  product: Product;
}

const ProductsCard = ({ product }: Props) => {
  const { Meta } = Card;
  return (
    <Row>
      <Card
        hoverable
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          width: 300,
        }}
        cover={
          <img
            alt={product.title}
            src={product.image}
            style={{ height: 200, objectFit: "contain", padding: 10 }}
          />
        }
      >
        <Meta title={product.title} description={`$${product.price}`} />
      </Card>
    </Row>
  );
};

export default ProductsCard;
