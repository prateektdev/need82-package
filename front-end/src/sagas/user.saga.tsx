import {
  takeEvery,
  put,
  call
} from 'redux-saga/effects';
import { userSignIn, userSignUp } from '../constants/config';
import { putRequest, postRequest } from '../utils/api';
import { userSignInSuccess, userSignInFailed, USER_SIGNIN, userSignUpSuccess, userSignUpFailed, USER_SIGNUP } from '../actions/user.actions';

function* signInReq(action: any) {
  try {
    const { data } = action;
    const response = yield call(postRequest, userSignIn, data);
    yield put(userSignInSuccess(response));
  } catch (err) {
    yield put(userSignInFailed(err.message));
  }
}

function* signUpReq(action: any) {
  try {
    const { data } = action;
    data['role'] = 2;
    const response = yield call(postRequest, userSignUp, data);
    yield put(userSignUpSuccess(response));
  } catch (err) {
    yield put(userSignUpFailed(err.message));
  }
}

export default [
  takeEvery(USER_SIGNIN, signInReq),
  takeEvery(USER_SIGNUP, signUpReq),
];