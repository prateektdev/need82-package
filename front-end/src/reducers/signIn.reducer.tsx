import {
  USER_SIGNIN,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAILED,
  USER_SIGNOUT,
  LoginAction
} from '../actions/user.actions';

import {
  initialStateSignIn,
  LoginState,
} from '../interfaces/signIn.interface';

export const signIn = function (state = initialStateSignIn, action: LoginAction): LoginState {
  switch (action.type) {
    case USER_SIGNIN:
      return ({
        ...state,
        error: '',
        isLoading: true,
        isSignInSuccess:false
      });
    case USER_SIGNIN_SUCCESS:
      return ({
        ...state,
        message: action.message,
        isLoading: false,
        error: '',
        isSignInSuccess: true
      });
    case USER_SIGNIN_FAILED:
      return ({
        ...state,
        isLoading: false,
        error: action.error,
        isSignInSuccess: false
      });
    case USER_SIGNOUT:
      return ({
        ...state,
        isLoading: false,
        error: action.error,
        isSignInSuccess: false
      });
    default:
      return state;
  }
};