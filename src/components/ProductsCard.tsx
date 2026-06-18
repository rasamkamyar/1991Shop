import { Button, Card } from "antd";
import type { Product } from "../features/types/types";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
interface Props {
  product: Product;
}

const ProductsCard = ({ product }: Props) => {
  const { Meta } = Card;
  return (
    <Card
      hoverable
      style={{
        marginTop: 16,
        width: 280,
        borderRadius: 12,
        overflow: "hidden",
      }}
      bodyStyle={{ padding: 16 }}
      cover={
        <div
          style={{
            height: 220,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
            background: "#fafafa",
          }}
        >
          <img
            alt={product.title}
            src={product.image}
            style={{
              maxHeight: "100%",
              maxWidth: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      }
      actions={[
        <Button type="text" icon={<ShoppingCartOutlined />}>
          Add
        </Button>,
        <Button type="text" icon={<EyeOutlined />}>
          Details
        </Button>,
      ]}
    >
      <Meta
        title={
          <div
            title={product.title}
            style={{
              fontSize: 15,
              fontWeight: 500,
              lineHeight: "22px",
              height: 30,
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              textOverflow: "ellipsis",
            }}
          >
            {product.title}
          </div>
        }
        description={
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 8,
            }}
          >
            <span
              style={{
                fontWeight: 600,
                color: "#8B3A3A", // dark gray-green
                fontSize: 15,
              }}
            >
              ${product.price}
            </span>

            <span
              style={{
                background: "#f2f4f3",
                color: "#8B3A3A",
                padding: "2px 8px",
                borderRadius: 6,
                fontSize: 12,
                textTransform: "capitalize",
              }}
            >
              {product.category}
            </span>
          </div>
        }
      />

    </Card>
  );
};

export default ProductsCard;
