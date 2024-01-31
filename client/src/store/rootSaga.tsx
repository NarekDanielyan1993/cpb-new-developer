import { all, fork } from 'redux-saga/effects';
import watchProducts from './products/saga';

function* rootSaga() {
    yield all([fork(watchProducts)]);
}

export default rootSaga;
