import {
  USER_FORGOT_PASSWORD,
  USER_FORGOT_PASSWORD_SUCCESS,
  USER_FORGOT_PASSWORD_FAILED,
  ForgotPasswordAction,
  USER_CONFIRM_FORGOT_PASSWORD,
  USER_CONFIRM_FORGOT_PASSWORD_SUCCESS,
  USER_CONFIRM_FORGOT_PASSWORD_FAILED,
  ConfirmForgotPasswordAction
} from '../actions/user.actions';

import {
  initialStateForgotPassword,
  ForgotPasswordState,
  initialStateConfirmForgotPassword,
  ConfirmForgotPasswordState
} from '../interfaces/forgotPassword.interface';

export const forgotPassword = function (state = initialStateForgotPassword, action: ForgotPasswordAction): ForgotPasswordState {
  switch (action.type) {
    case USER_FORGOT_PASSWORD:
      return ({
        ...state,
        error: '',
        isLoading: true,
        isForgotPasswordSuccess: false
      });
    case USER_FORGOT_PASSWORD_SUCCESS:
      return ({
        ...state,
        message: action.message,
        isLoading: false,
        error: '',
        isForgotPasswordSuccess: true
      });
    case USER_FORGOT_PASSWORD_FAILED:
      return ({
        ...state,
        message: '',
        isLoading: false,
        isForgotPasswordSuccess: false,
        error: action.error,
      });
    default:
      return state;
  }
};

export const confirmForgotPassword = function (state = initialStateConfirmForgotPassword, action: ConfirmForgotPasswordAction): ConfirmForgotPasswordState {
  switch (action.type) {
    case USER_CONFIRM_FORGOT_PASSWORD:
      return ({
        ...state,
        error: '',
        isLoading: true,
        isConfirmForgotPasswordSuccess:false
      });
    case USER_CONFIRM_FORGOT_PASSWORD_SUCCESS:
      return ({
        ...state,
        message: action.message,
        isLoading: false,
        error: '',
        isConfirmForgotPasswordSuccess: true
      });
    case USER_CONFIRM_FORGOT_PASSWORD_FAILED:
      return ({
        ...state,
        message: '',
        isLoading: false,
        isConfirmForgotPasswordSuccess: false,
        error: action.error,
      });
    default:
      return state;
  }
};