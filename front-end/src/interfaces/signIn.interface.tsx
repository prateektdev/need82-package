export interface LoginState {
  isLoading: boolean;
  isSignInSuccess: boolean;
  message: any;
  error: string;
}

export const initialStateSignIn: LoginState = {
  error: '',
  message: '',
  isLoading: false,
  isSignInSuccess: false
};