import {
    GET_PRODUCTS,
    GET_PRODUCTS_FAILURE,
    GET_PRODUCTS_INIT,
    GET_PRODUCTS_SUCCESS
} from 'src/store/products/action';

export interface IProductsState {
    products: {
        isLoading: boolean;
        isFetched: boolean;
        data: IProduct[];
    };
    isLoading: boolean;
}

export interface IProduct {
    _id: string;
    bodyHtml: string;
    url: string
}

// Store
export type GET_PRODUCTS_TYPE = typeof GET_PRODUCTS;
export type GET_PRODUCTS_INIT_TYPE = typeof GET_PRODUCTS_INIT;
export type GET_PRODUCTS_SUCCESS_TYPE = typeof GET_PRODUCTS_SUCCESS;
export type GET_PRODUCTS_FAILURE_TYPE = typeof GET_PRODUCTS_FAILURE;


export interface IGetProductsAction {
    type: GET_PRODUCTS_TYPE;
}

export interface IGetProductsInitAction {
    type: GET_PRODUCTS_INIT_TYPE;
}

export interface IGetProductsSuccessPayload {
    board: IProduct[];
}

export interface IGetProductsSuccessAction {
    type: GET_PRODUCTS_SUCCESS_TYPE;
    payload: IGetProductsSuccessPayload;
}
