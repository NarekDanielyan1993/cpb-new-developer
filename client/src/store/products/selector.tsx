import { IAppState } from "src/types";

export const productsSelectorProducts = (state: IAppState) =>
    state.productsState.products;
export const productsSelector = (state: IAppState) => state.productsState;
