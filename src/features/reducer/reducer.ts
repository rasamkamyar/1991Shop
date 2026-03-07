import type { intialStateModel } from "../types/types";

export const initialData: intialStateModel = {
  products: [],
  loading: false,
};

export const reducer = (state: intialStateModel, action: any) => {
  const { loading } = action.payload;
  switch (action.type) {
    case "loading":
      return {
        ...state,
        loading,
      };

    default:
      return state;
  }
};
