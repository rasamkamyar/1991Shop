import { Card, Skeleton } from "antd";

const ProductSkeleton = () => {
  return (
    <Card
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
            padding: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#fafafa",
          }}
        >
          <Skeleton.Image style={{ width: 120, height: 160 }} active />
        </div>
      }
      actions={[
        <Skeleton.Button active size="small" />,
        <Skeleton.Button active size="small" />,
      ]}
    >
      {/* title */}
      <div style={{ marginBottom: 10 }}>
        <Skeleton.Input active block style={{ width: "100%" }} size="small" />
      </div>

      {/* price + category */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Skeleton.Input active style={{ width: 60 }} size="small" />
        <Skeleton.Input active style={{ width: 80 }} size="small" />
      </div>
    </Card>
  );
};

export default ProductSkeleton;
