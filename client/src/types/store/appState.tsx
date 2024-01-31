import productsReducer from 'src/store/products/reducer';

export interface IAppState {
    productsState: ReturnType<typeof productsReducer>;
}
