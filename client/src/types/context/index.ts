import { IProduct } from "..";

export interface IProductsContext {
    isProductsLoading: boolean;
    cards: IProduct[];
}