import { createContext, useContext } from "react";
import type { ProductsContextType } from "../types/types";

export const ProductsContext = createContext<ProductsContextType | null>(null);

export const useProductsContext = () => {
  const context = useContext(ProductsContext);
  if (context === null) {
    throw new Error(
      "useProductsContext must be used within a ProductsProvider",
    );
  }
  return context;
};
