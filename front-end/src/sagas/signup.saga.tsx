import {
  takeEvery,
  put,
  call
} from 'redux-saga/effects';
import {
  USER_SIGNUP,
  userSignUpSuccess,
  userSignUpFailed,
  userConfirmSignUpSuccess,
  userConfirmSignUpFailed,
  USER_CONFIRM_SIGNUP,
  USER_RESEND_CONFIRM_SIGNUP,
  userResendConfirmSignUpFailed,
  userResendConfirmSignUpSuccess,
  userSignInRemoveProps
} from '../actions/user.actions';
import { USER_NOT_CONFIRMED, NAVIGATION_TIMEOUT } from '../constants/constants';
import { setTOLocalStorage } from '../utils/localStorage';
import { Auth } from 'aws-amplify';
import {history} from '../utils/history';

async function signUpRequest(user: any) {
  const { username, email, password } = user;
  return await Auth.signUp({
    username,
    password,
    attributes: {
      email,
    },
  });
}

function* signUpReq(action: any) {
  try {
    const { data } = action;
    const response = yield call(signUpRequest, data);
    setTOLocalStorage(USER_NOT_CONFIRMED, 'UserNotConfirmedException');
    yield put(userSignUpSuccess(response));
  } catch (err) {
    yield put(userSignUpFailed(err.message));
  }
}

async function confirmSignUpRequest(user: any) {
  const { username, code } = user;
  return await Auth.confirmSignUp(username,code);
}

function* confirmSignUpReq(action: any) {
  try {
    const { data } = action;
    const response = yield call(confirmSignUpRequest, data);
    setTOLocalStorage(USER_NOT_CONFIRMED, "");
    yield put(userConfirmSignUpSuccess(response));
  } catch (err) {
    yield put(userConfirmSignUpFailed(err.message));
  }
}

async function resendConfirmSignUpRequest(user: any) {
  const { username } = user;
  return await Auth.resendSignUp(username);
}

function* resendConfirmSignUpReq(action: any) {
  try {
    const { data } = action;
    const response = yield call(resendConfirmSignUpRequest, data);
    yield put(userResendConfirmSignUpSuccess(response));
  } catch (err) {
    yield put(userResendConfirmSignUpFailed(err.message));
  }
}

export default [
  takeEvery(USER_SIGNUP, signUpReq),
  takeEvery(USER_CONFIRM_SIGNUP, confirmSignUpReq),
  takeEvery(USER_RESEND_CONFIRM_SIGNUP, resendConfirmSignUpReq),
];
