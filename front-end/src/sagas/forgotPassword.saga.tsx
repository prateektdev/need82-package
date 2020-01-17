import {
  takeEvery,
  put,
  call
} from 'redux-saga/effects';
import {
  USER_CONFIRM_FORGOT_PASSWORD,
  userForgotPasswordSuccess,
  userForgotPasswordFailed,
  userConfirmForgotPasswordSuccess,
  userConfirmForgotPasswordFailed,
  USER_FORGOT_PASSWORD
} from '../actions/user.actions';
import { USER_FORGOTPASSWORD, NAVIGATION_TIMEOUT } from '../constants/constants';
import { setTOLocalStorage } from '../utils/localStorage';
import { Auth } from 'aws-amplify';
import {history} from '../utils/history';

async function forgotPasswordRequest(user: any) {
  const { username } = user;
  return await Auth.forgotPassword(username);
}

function* forgotPasswordReq(action: any) {
  try {
    const { data } = action;
    const response = yield call(forgotPasswordRequest, data);
    setTOLocalStorage(USER_FORGOTPASSWORD, 'Forgot Password code sent');
    yield put(userForgotPasswordSuccess(response));
    setTimeout(() => {
      history.push("/confirm-forgot-password");
    }, NAVIGATION_TIMEOUT);
  } catch (err) {
    yield put(userForgotPasswordFailed(err.message));
  }
}

async function confirmForgotPasswordRequest(user: any) {
  const { username, code, new_password } = user;
  return await Auth.forgotPasswordSubmit(username, code, new_password);
}

function* confirmForgotPasswordReq(action: any) {
  try {
    const { data } = action;
    const response = yield call(confirmForgotPasswordRequest, data);
    setTOLocalStorage(USER_FORGOTPASSWORD, '');
    yield put(userConfirmForgotPasswordSuccess(response));
    setTimeout(() => {
      history.push("/signin");
    }, NAVIGATION_TIMEOUT);
  } catch (err) {
    yield put(userConfirmForgotPasswordFailed(err.message));
  }
}

export default [
  takeEvery(USER_FORGOT_PASSWORD, forgotPasswordReq),
  takeEvery(USER_CONFIRM_FORGOT_PASSWORD, confirmForgotPasswordReq),
];