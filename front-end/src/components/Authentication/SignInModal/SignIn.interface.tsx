import {
  userSignInFailed as userSignInFailedAction,
  userSignInSuccess as userSignInSuccessAction,
} from '../../../actions/user.actions';

export interface SignInState {
  hidden: boolean
}

export interface stateProps {
  signIn: {
    message: string,
    error: string,
    isSignInSuccess: boolean,
    isLoading: boolean
  }
}

export interface PropsFromDispatch {
  onSubmit: any,
  userSignInFailed: typeof userSignInFailedAction,
  userSignInSuccess: typeof userSignInSuccessAction,
}