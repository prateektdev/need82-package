export interface SignupState {
  isLoading: boolean;
  error: string;
  message: any;
  isSignupSuccess: boolean,
}

export const initialStateSignup: SignupState = {
  error: '',
  isLoading: false,
  message: '',
  isSignupSuccess: false,
};

export interface ConfirmSignUpState {
  isLoading: boolean;
  error: string;
  message: any;
  isConfirmSignupSuccess: boolean,
}

export const initialStateConfirmSignup: ConfirmSignUpState = {
  error: '',
  isLoading: false,
  message: '',
  isConfirmSignupSuccess: false
};

export interface ResendConfirmSignUpState {
  isLoading: boolean;
  error: string;
  message: any;
  isResendConfirmSignupSuccess: boolean,
}

export const initialStateResendSignup: ResendConfirmSignUpState = {
  error: '',
  isLoading: false,
  message: '',
  isResendConfirmSignupSuccess: false
};