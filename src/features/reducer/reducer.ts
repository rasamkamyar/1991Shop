import { mockData } from "../../services/mockData";
import type { intialStateModel } from "../types/types";

export const initialData: intialStateModel = {
  products: mockData,
  loading: false,
  searchedProducts: [],
  isSearch: false,
  selectedCategory: [],
  isCategorySelected: false,
};

export const reducer = (state: intialStateModel, action: any) => {
  const {
    products,
    loading,
    searchedProducts,
    isSearch,
    selectedCategory,
    isCategorySelected,
  } = action.payload;
  switch (action.type) {
    case "Loading":
      return {
        ...state,
        loading,
      };
    case "SearchedProducts":
      return {
        ...state,
        searchedProducts,
        isSearch,
      };
    case "SelectedCategory":
      return {
        ...state,
        selectedCategory,
        isCategorySelected,
      };
    case "reset":
      return {
        ...state,
        products,
      };
    default:
      return state;
  }
};
