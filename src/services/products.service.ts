import type { Product } from "../features/types/types";
import { api } from "./api";

export const getProducts = async (): Promise<Product[]> => {
  const { data } = await api.get("/products");
  return data ?? [];
};
