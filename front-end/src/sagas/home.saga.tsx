import {
 takeEvery,
 put,
 call
} from 'redux-saga/effects';

import {
 FETCH_ALL_LISTING,
 fetchListingDataSuccess,
 fetchListingFailed,
} from '../actions/home.actions';
import { fetchAllItem } from '../constants/config';
import { getRequest } from '../utils/api';


function* fetchListingReq(action: any) {
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
  const response = yield call(getRequest, fetchAllItem + '?' + query);
  yield put(fetchListingDataSuccess(response));
 } catch (err) {
  yield put(fetchListingFailed(err.message));
 }
}

export default [
 takeEvery(FETCH_ALL_LISTING, fetchListingReq),
];