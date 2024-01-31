import { IGetProductsAction } from "src/types";

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCTS_INIT = 'GET_PRODUCTS_INIT';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE';

export const getProducts = (): IGetProductsAction => ({
    type: GET_PRODUCTS,
});
