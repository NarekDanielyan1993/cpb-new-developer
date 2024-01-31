/* eslint-disable no-param-reassign */

import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { IProduct, IProductsState } from 'src/types';

const initialState: IProductsState = {
    products: {
        isFetched: false,
        isLoading: false,
        data: [],
    },
    isLoading: false,
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        toggleProductLoading: (
            state: IProductsState,
            action: PayloadAction<boolean>
        ) => {
            state.isLoading = action.payload;
        },
        getProductsInit: (state: IProductsState) => {
            state.products.isLoading = true;
            state.products.isFetched = true;
            state.products.data = [];
        },
        getProductsSuccess: (
            state: IProductsState,
            action: PayloadAction<IProduct[]>
        ) => {
            state.products.isLoading = false;
            state.products.isFetched = true;
            state.products.data = action.payload;
        },
        getProductsFailure: (state: IProductsState) => {
            state.products.isLoading = false;
            state.products.isFetched = true;
            state.products.data = [];
        },
    },
});

export const {
    getProductsSuccess,
    getProductsFailure,
    getProductsInit,
    toggleProductLoading,
} = productsSlice.actions;

export default productsSlice.reducer;
