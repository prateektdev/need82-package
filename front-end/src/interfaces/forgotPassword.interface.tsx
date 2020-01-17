export interface ForgotPasswordState {
  isLoading: boolean;
  error: string;
  message: any;
  isForgotPasswordSuccess: boolean,
}

export const initialStateForgotPassword: ForgotPasswordState = {
  error: '',
  isLoading: false,
  message: '',
  isForgotPasswordSuccess: false
};

export interface ConfirmForgotPasswordState {
  isLoading: boolean;
  error: string;
  message: any;
  isConfirmForgotPasswordSuccess: boolean,
}

export const initialStateConfirmForgotPassword: ConfirmForgotPasswordState = {
  error: '',
  isLoading: false,
  message: '',
  isConfirmForgotPasswordSuccess: false
};