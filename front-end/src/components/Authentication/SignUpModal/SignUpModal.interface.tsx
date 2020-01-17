import {
  userSignUp as userSignUpAction,
  userSignUpSuccess as userSignUpSuccessAction,
  userSignUpFailed as userSignUpFailedAction,
} from '../../../actions/user.actions';

export interface SignUpState {
  username: string,
  email: string,
  password: string,
  success: string,
  isSignupSuccess: boolean,
  termsConditions: boolean,
  hidden: boolean
}

export interface stateProps {
  signUp: {
    message: string,
    error: string,
    isLoading: boolean,
    isSignupSuccess: any
  }
}

export interface PropsFromDispatch {
  userSignUp: typeof userSignUpAction,
  userSignUpSuccess: typeof userSignUpSuccessAction,
  userSignUpFailed: typeof userSignUpFailedAction,
  onSubmit: any
}
