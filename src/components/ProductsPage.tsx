import { useProducts } from "../features/hooks/useProducts";

export const ProductsPage = () => {
  const { data, isLoading, isError } = useProducts();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;

  return (
    <div>
      {data?.map((product: any) => (
        <div key={product.id}>
          <img src={product.thumbnail} width={100} />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};
