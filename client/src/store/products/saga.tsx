import type { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { PRODUCT_API } from 'src/constant/api';
import { IProduct } from 'src/types';
import { apiSagaRequest } from 'src/utills/apiRequest';
import { GET_PRODUCTS } from './action';
import { getProductsFailure, getProductsInit, getProductsSuccess } from './reducer';

function* getProductsGenerator() {
    yield put(getProductsInit());
    try {
        const { data }: AxiosResponse<IProduct[]> = yield call(
            apiSagaRequest,
            'get',
            PRODUCT_API.GET_PRODUCTS,
            {},
            { withCredentials: true }
        );
        yield put(getProductsSuccess(data));
    } catch (error) {
        yield put(getProductsFailure());
    }
}

function* watchProducts() {
    yield takeLatest(GET_PRODUCTS, getProductsGenerator);
}
export default watchProducts;
