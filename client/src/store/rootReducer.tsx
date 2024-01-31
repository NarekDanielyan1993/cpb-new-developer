import { combineReducers } from '@reduxjs/toolkit';
import { IAppState } from 'src/types';
import productsReducer from './products/reducer';

const rootReducer = combineReducers<IAppState>({
    productsState: productsReducer,
});

export default rootReducer;
