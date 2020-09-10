import {
  takeEvery,
  put,
  call
} from 'redux-saga/effects';
import { createPackage,allPackage } from '../constants/config';
import { postRequest, getRequest } from '../utils/api';
import {
  addStoreSuccess,
  addStoreFailed,
  ADD_STORE,
  fetchAllStoreDataSuccess,
  fetchAllStoreDataFailed,
  FETCH_ALL_STORE
} from '../actions/store.actions';
import { history } from '../utils/history';

function* addPackageReq(action: any) {
  try {
    const { data } = action;
    const response = yield call(postRequest, createPackage, data);
    yield put(addStoreSuccess(response));
    history.push('/');
  } catch (err) {
    yield put(addStoreFailed(err.message));
  }
}


function* fetchAllPackageReq(action: any) {
  try {
    const { data } = action;
    const response = yield call(getRequest, allPackage);
    yield put(fetchAllStoreDataSuccess(response));
  } catch (err) {
    yield put(fetchAllStoreDataFailed(err.message));
  }
}

export default [
  takeEvery(ADD_STORE, addPackageReq),
  takeEvery(FETCH_ALL_STORE, fetchAllPackageReq),
];