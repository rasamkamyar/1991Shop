import { Card, Skeleton } from "antd";

const { Meta } = Card;

const ProductSkeleton = () => {
  return (
    <Card
      hoverable
      style={{
        marginTop: 10,
        width: 300,
        padding: 0,
      }}
      cover={
        <div style={{ height: 200, padding: 10 }}>
          <Skeleton.Image active style={{ width: "100%", height: "100%" }} />
        </div>
      }
      actions={[
        <Skeleton.Button active size="small" />,
        <Skeleton.Button active size="small" />,
      ]}
    >
      <Meta
        title={<Skeleton.Input active style={{ width: 200 }} />}
        description={<Skeleton.Input active style={{ width: 120 }} />}
      />

      <p style={{ margin: "5px 0" }}>
        <Skeleton.Input active size="small" style={{ width: 150 }} />
      </p>
    </Card>
  );
};

export default ProductSkeleton;
