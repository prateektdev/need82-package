import {
  takeEvery,
  put,
  call
} from 'redux-saga/effects';
import {
  FETCH_ALL_STORE,
  fetchAllStoreDataSuccess,
  fetchAllStoreDataFailed,
  FETCH_STORE,
  fetchStoreDataSuccess,
  fetchStoreDataFailed,
  ADD_STORE,
  addStoreFailed,
  addStoreSuccess,
  GET_STORE_CATEGORIES,
  fetchStoreCategoriesFailed,
  fetchStoreCategoriesSuccess,
  FETCH_CURRENT_STORE,
  fetchCurrentStoreDataSuccess,
  fetchCurrentStoreDataFailed,
  FETCH_USER_STORE,
  fetchUserStoreDataSuccess,
  fetchUserStoreDataFailed,
  fetchStoreDetailsFailed,
  fetchStoreDetailsSuccess,
  FETCH_STORE_DETAILS,
} from '../actions/store.actions';
import {
  apiStore,
  fetchStoreCategories,
  currentStores,
  userStore
} from '../constants/config';
import { postRequest, getRequest } from '../utils/api';
import jwtDecode from 'jwt-decode';
import { getTokenFromLocalStorage } from '../utils/localStorage';
import { AUTHENTICATION_TOKEN } from '../constants/constants';

function* allStoreReq(action: any) {
  const { data } = action;
  const params = {
    ...data,
    "size": data && data.size || 5,
    "lastKey": data && data.lastKey || ''
  };
  const query = Object.keys(params)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&');
  try {
    const response = yield call(getRequest, apiStore + '?' + query);
    yield put(fetchAllStoreDataSuccess(response));
  } catch (err) {
    yield put(fetchAllStoreDataFailed(err.message));
  }
}

function* storeReq(action: any) {
  const { data } = action;
  const params = {
    ...data,
    "size": data.size,
    "lastKey": data.lastKey || ''
  };
  const query = Object.keys(params)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&');
  try {
    const { data } = action;
    const response = yield call(getRequest, apiStore + '/' + data.store_id + '/items' + '?' + query);
    yield put(fetchStoreDataSuccess(response));
  } catch (err) {
    yield put(fetchStoreDataFailed(err.message));
  }
}

function* storeDetailsReq(action: any) {
  try {
    const { data } = action;
    const response = yield call(getRequest, apiStore + '/' + data.store_id);
    yield put(fetchStoreDetailsSuccess(response));
  } catch (err) {
    yield put(fetchStoreDetailsFailed(err.message));
  }
}

function* storeCategories() {
  try {
    const response = yield call(getRequest, fetchStoreCategories);
    yield put(fetchStoreCategoriesSuccess(response));
  } catch (err) {
    yield put(fetchStoreCategoriesFailed(err.message));
  }
}

function* addStoreReq(action: any) {
  try {
    const { data } = action;
    const response = yield call(postRequest, apiStore, data);
    yield put(addStoreSuccess(response));
  } catch (err) {
    yield put(addStoreFailed(err.message));
  }
}

function* currentStoresReq(action: any) {
  const { data } = action;
  const params = {
    ...data
  };
  const query = Object.keys(params)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&');
  try {
    const response = yield call(getRequest, currentStores + '?' + query);
    yield put(fetchCurrentStoreDataSuccess(response));
  } catch (err) {
    yield put(fetchCurrentStoreDataFailed(err.message));
  }
}

function* userStoresReq(action: any) {
  const { data } = action;
  const params = {
    ...data,
    "size": data.size || 5,
  };
  const query = Object.keys(params)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&');
  const token = getTokenFromLocalStorage(AUTHENTICATION_TOKEN);
  const user_id = jwtDecode(token).sub;
  try {
    const response = yield call(getRequest, userStore + user_id + '/stores' + '?' + query);
    yield put(fetchUserStoreDataSuccess(response));
  } catch (err) {
    yield put(fetchUserStoreDataFailed(err.message));
  }
}


export default [
  takeEvery(FETCH_ALL_STORE, allStoreReq),
  takeEvery(FETCH_STORE, storeReq),
  takeEvery(ADD_STORE, addStoreReq),
  takeEvery(GET_STORE_CATEGORIES, storeCategories),
  takeEvery(FETCH_CURRENT_STORE, currentStoresReq),
  takeEvery(FETCH_USER_STORE, userStoresReq),
  takeEvery(FETCH_STORE_DETAILS, storeDetailsReq),
];