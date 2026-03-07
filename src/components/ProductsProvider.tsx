import { useReducer, type Dispatch } from "react";
import { ProductsContext } from "../features/context/context";
import { initialData, reducer } from "../features/reducer/reducer";
import type { intialStateModel } from "../features/types/types";

const ProductsProvider = ({ children }: any) => {
  const [state, dispatch]: [intialStateModel, Dispatch<any>] = useReducer(
    reducer,
    initialData,
  );
  console.log(state)
  return (
    <ProductsContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
