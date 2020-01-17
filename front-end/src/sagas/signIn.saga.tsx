import {
  takeEvery,
  put,
  call
} from 'redux-saga/effects';
import {
  USER_SIGNIN,
  USER_SIGNOUT,
  userSignInSuccess,
  userSignInFailed,
  userSignInRemoveProps
} from '../actions/user.actions';
import { AUTHENTICATION_TOKEN, NAVIGATION_TIMEOUT, USER_NOT_CONFIRMED } from '../constants/constants';
import { Auth } from 'aws-amplify';
import {history} from '../utils/history';
import { setTOLocalStorage } from '../utils/localStorage';


async function signInRequest(username: string, password: string) {
  return await Auth.signIn(username, password);
}

function* signInReq(action: any) {
  try {
    const { data } = action;
    const response = yield call(signInRequest, data.username, data.password);
    localStorage.setItem(AUTHENTICATION_TOKEN, response.keyPrefix+'.'+response.username+'.idToken');
    yield put(userSignInSuccess(response));
  } catch (err) {
    if (err.message === 'User is not confirmed.') {
      yield put(userSignInFailed(err.message));
      setTOLocalStorage(USER_NOT_CONFIRMED, err.message);
    }else if (err.message === 'Only radix 2, 4, 8, 16, 32 are supported') {
      yield put(userSignInFailed("Invalid Username"));
    } else {
      yield put(userSignInFailed(err.message));
    }
  }
}

function signOutReq() {
  localStorage.removeItem(AUTHENTICATION_TOKEN);
}

export default [
  takeEvery(USER_SIGNIN, signInReq),
  takeEvery(USER_SIGNOUT, signOutReq)
];