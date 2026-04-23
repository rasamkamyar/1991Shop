import { Card } from "antd";
import type { Product } from "../features/types/types";
import img from "../assets/images/86765.jpg";
interface Props {
  product: Product;
}

const ProductsCard = ({ product }: Props) => {
  const { Meta } = Card;
  return (
    <Card
      hoverable
      style={{
        marginTop: 10,
        width: 300,
        padding: 0,
      }}
      cover={
        <img
          alt={product.title}
          src={img}
          style={{ height: 200, objectFit: "contain", padding: 10 }}
        />
      }
      actions={["add to cart", "show details"]}
    >
      <div title={product.title}>
        <Meta title={product.title} description={`Price: $${product.price}`} />
      </div>
      <p style={{ margin: "5px 0" }}>
        <b>Category:</b> {product.category}
      </p>
    </Card>
  );
};

export default ProductsCard;
