import type { Dispatch } from "react";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface intialStateModel {
  products: Product[];
  loading: boolean;
}

export interface ProductsContextType {
  state: intialStateModel;
  dispatch: Dispatch<any>;
}
