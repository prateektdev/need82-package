import {
  USER_SIGNUP,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILED,
  USER_CONFIRM_SIGNUP,
  USER_CONFIRM_SIGNUP_SUCCESS,
  USER_CONFIRM_SIGNUP_FAILED,
  USER_RESEND_CONFIRM_SIGNUP,
  USER_RESEND_CONFIRM_SIGNUP_SUCCESS,
  USER_RESEND_CONFIRM_SIGNUP_FAILED,
  SignupAction,
  ConfirmSignUpAction,
  ResendConfirmSignUpAction
} from '../actions/user.actions';


import {
  initialStateSignup,
  SignupState,
  initialStateConfirmSignup,
  ConfirmSignUpState,
  initialStateResendSignup,
  ResendConfirmSignUpState
} from '../interfaces/signUp.interface';



export const signUp = function (state = initialStateSignup, action: SignupAction): SignupState {
  switch (action.type) {
    case USER_SIGNUP:
      return ({
        ...state,
        isLoading: true,
        isSignupSuccess:false
      });
    case USER_SIGNUP_SUCCESS:
      return ({
        ...state,
        message: action.message,
        isLoading: false,
        error: '',
        isSignupSuccess: true
      });
    case USER_SIGNUP_FAILED:
      return ({
        ...state,
        isLoading: false,
        error: action.error,
      });
    default:
      return state;
  }
};

export const confirmSignUp = function (state = initialStateConfirmSignup, action: ConfirmSignUpAction): ConfirmSignUpState {
  switch (action.type) {
    case USER_CONFIRM_SIGNUP:
      return ({
        ...state,
        error: '',
        isLoading: true,
        isConfirmSignupSuccess:false
      });
    case USER_CONFIRM_SIGNUP_SUCCESS:
      return ({
        ...state,
        message: action.message,
        isLoading: false,
        error: '',
        isConfirmSignupSuccess: true
      });
    case USER_CONFIRM_SIGNUP_FAILED:
      return ({
        ...state,
        message: '',
        isLoading: false,
        isConfirmSignupSuccess: false,
        error: action.error,
      });
    default:
      return state;
  }
};

export const resendConfirmSignUp = function (state = initialStateResendSignup, action: ResendConfirmSignUpAction): ResendConfirmSignUpState {
  switch (action.type) {
    case USER_RESEND_CONFIRM_SIGNUP:
      return ({
        ...state,
        error: '',
        isLoading: true,
      });
    case USER_RESEND_CONFIRM_SIGNUP_SUCCESS:
      return ({
        ...state,
        error: 'New Auth code sent on registered email',
        isLoading: false,
        isResendConfirmSignupSuccess: true
      });
    case USER_RESEND_CONFIRM_SIGNUP_FAILED:
      return ({
        ...state,
        message: '',
        isLoading: false,
        isResendConfirmSignupSuccess: false,
        error: action.error,
      });
    default:
      return state;
  }
};