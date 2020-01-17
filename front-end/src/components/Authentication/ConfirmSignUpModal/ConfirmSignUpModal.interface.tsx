import {
  userConfirmSignUp as userConfirmSignUpAction,
  userConfirmSignUpFailed as userConfirmSignUpFailedAction,
  userResendConfirmSignUp as userResendConfirmSignUpAction,
  userResendConfirmSignUpFailed as userResendConfirmSignUpFailedAction
}
  from '../../../actions/user.actions';

export interface ConfirmSignUpState {
  username: string,
  code: string,
  error: string,
  success: string,
  isConfirmSignupSuccess: boolean
}

export interface stateProps {
  confirmSignUp: {
    message: string,
    error: string,
    isConfirmSignupSuccess: boolean,
    isLoading: boolean
  },
  resendConfirmSignUp: {
    message: string,
    error: string,
    isResendConfirmSignupSuccess: boolean,
    isLoading: boolean
  }
}

export interface PropsFromDispatch {
  userConfirmSignUp: typeof userConfirmSignUpAction,
  userConfirmSignUpFailed: typeof userConfirmSignUpFailedAction,
  userResendConfirmSignUp: typeof userResendConfirmSignUpAction,
  userResendConfirmSignUpFailed: typeof userResendConfirmSignUpFailedAction,
  onSubmit: any
}
