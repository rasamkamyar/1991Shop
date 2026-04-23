import { Col, Input, Row, Select } from "antd";
import ProductsCard from "../components/ProductsCard";
import { mockData } from "../services/mockData";
import { useProductsContext } from "../features/context/context";
import Sider from "antd/es/layout/Sider";
import { useEffect, useMemo } from "react";
import type { Product } from "../features/types/types";
// import type { Product } from "../features/types/types";
// import { useProducts } from "../features/hooks/useProducts";
// import type { Product } from "../features/types/types";

export const ProductsPage = () => {
  // const { data, isLoading, isError } = useProducts();
  // if (isLoading) return <p>Loading...</p>;
  // if (isError) return <p>Error...</p>;
  const { state, dispatch } = useProductsContext();

  const {
    products,
    searchedProducts,
    isSearch,
    selectedCategory,
    isCategorySelected,
  } = state;

  const filteredCategory = products.map((item) => item.category);
  const catecories = Array.from(new Set(filteredCategory));

  let productsToDisplay: Product[];

  if (isSearch && isCategorySelected) {
    productsToDisplay = searchedProducts.filter((item) =>
      selectedCategory.some((selected) => selected.id === item.id),
    );
  } else if (isSearch) {
    productsToDisplay = searchedProducts;
  } else if (isCategorySelected) {
    productsToDisplay = selectedCategory;
  } else {
    productsToDisplay = products;
  }

  const handleChange = (e: any) => {
    const searched = e.target.value.toLowerCase();
    const filteredProduct = products.filter((item) =>
      item.title.toLowerCase().includes(searched),
    );

    dispatch({
      type: "SearchedProducts",
      payload: {
        searchedProducts: filteredProduct,
        isSearch: true,
      },
    });
  };

  const handleChangeCategory = (selected: { label: string; value: string }) => {
    const selectedCategory = productsToDisplay.filter(
      (item) => item.category === selected.value,
    );

    dispatch({
      type: "SelectedCategory",
      payload: {
        selectedCategory,
        isCategorySelected: true,
      },
    });
  };

  const resetHandler = () => {
    productsToDisplay = products;
    console.log(productsToDisplay)
  };

  return (
    <div style={{ display: "flex" }}>
      <Row gutter={[-48, 16]}>
        {productsToDisplay.map((product) => (
          <Col lg={6} key={product.id}>
            <ProductsCard product={product} />
          </Col>
        ))}
      </Row>
      <Sider
        style={{ margin: 10, height: 200, backgroundColor: "transparent" }}
      >
        <Input.Search
          allowClear
          onChange={handleChange}
          placeholder="Search Item..."
        />
        <Select
          placeholder="Select Category..."
          style={{ width: 200, marginTop: 10 }}
          labelInValue
          allowClear
          onClear={resetHandler}
          onChange={(selected) => handleChangeCategory(selected)}
          options={catecories.map((cat) => ({
            value: cat,
            label: cat,
          }))}
           mode="multiple"
        />
      </Sider>
    </div>
  );
};
