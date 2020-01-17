import {
  takeEvery,
  put,
  call
} from 'redux-saga/effects';
import {
  FETCH_ALL_PACKAGE,
  fetchAllPackageDataSuccess,
  fetchAllPackageDataFailed,
  FETCH_PACKAGE,
  fetchPackageDataSuccess,
  fetchPackageDataFailed,
  ADD_PACKAGE,
  addPackageFailed,
  addPackageSuccess,
  FETCH_CURRENT_PACKAGE,
  fetchCurrentPackageDataSuccess,
  fetchCurrentPackageDataFailed,
  fetchPackageDetailsFailed,
  fetchPackageDetailsSuccess,
  FETCH_PACKAGE_DETAILS,
} from '../actions/package/package.actions';
import {
  addPackageApi, fetchPackageApi, fetchPackageDetailsApi,
  fetchAllPackageApi,fetchCurrentPackageApi
} from '../constants/config';
import { postRequest, getRequest } from '../utils/api';
import jwtDecode from 'jwt-decode';
import { getTokenFromLocalStorage } from '../utils/localStorage';
import { AUTHENTICATION_TOKEN } from '../constants/constants';

function* allPackageReq(action: any) {
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
    const response = yield call(getRequest, fetchAllPackageApi + '?' + query);
    yield put(fetchAllPackageDataSuccess(response));
  } catch (err) {
    yield put(fetchAllPackageDataFailed(err.message));
  }
}

function* packageReq(action: any) {
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
    const response = yield call(getRequest, fetchPackageApi + '/' + data.package_id + '/items' + '?' + query);
    yield put(fetchPackageDataSuccess(response));
  } catch (err) {
    yield put(fetchPackageDataFailed(err.message));
  }
}

function* packageDetailsReq(action: any) {
  try {
    const { data } = action;
    const response = yield call(getRequest, fetchPackageDetailsApi + '/' + data.package_id);
    yield put(fetchPackageDetailsSuccess(response));
  } catch (err) {
    yield put(fetchPackageDetailsFailed(err.message));
  }
}

function* addPackageReq(action: any) {
  try {
    const { data } = action;
    const response = yield call(postRequest, addPackageApi, data);
    yield put(addPackageSuccess(response));
  } catch (err) {
    yield put(addPackageFailed(err.message));
  }
}

function* currentPackagesReq(action: any) {
  const { data } = action;
  const params = {
    ...data
  };
  const query = Object.keys(params)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&');
  try {
    const response = yield call(getRequest, fetchCurrentPackageApi + '?' + query);
    yield put(fetchCurrentPackageDataSuccess(response));
  } catch (err) {
    yield put(fetchCurrentPackageDataFailed(err.message));
  }
}

export default [
  takeEvery(FETCH_ALL_PACKAGE, allPackageReq),
  takeEvery(FETCH_PACKAGE, packageReq),
  takeEvery(ADD_PACKAGE, addPackageReq),
  takeEvery(FETCH_CURRENT_PACKAGE, currentPackagesReq),
  takeEvery(FETCH_PACKAGE_DETAILS, packageDetailsReq),
];