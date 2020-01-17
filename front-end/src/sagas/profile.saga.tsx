import {
  takeEvery,
  put,
  call
} from 'redux-saga/effects';
import {
  FETCH_PROFILE,
  fetchUserProfileFailed,
  fetchUserProfileSuccess,
  EDIT_PROFILE,
  editUserProfileSuccess,
  editUserProfileFailed,
  fetchUserProfile
} from '../actions/profile.actions';
import { userProfile, } from '../constants/config';
import { getRequest, putRequest } from '../utils/api';

function* profileReq() {

  try {
    const response = yield call(getRequest, userProfile);
    yield put(fetchUserProfileSuccess(response));
  } catch (err) {
    yield put(fetchUserProfileFailed(err.message));
  }

}

function* editprofileReq(action: any) {
  try {
    const { data } = action;
    const response = yield call(putRequest, userProfile, data);
    yield put(editUserProfileSuccess(response));
    yield put(fetchUserProfile());
  } catch (err) {
    yield put(editUserProfileFailed(err.message));
  }
}

export default [
  takeEvery(FETCH_PROFILE, profileReq),
  takeEvery(EDIT_PROFILE, editprofileReq)
];