export const USER_SIGNUP = 'USER_SIGNUP';
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS';
export const USER_SIGNUP_FAILED = 'USER_SIGNUP_FAILED';

export const USER_CONFIRM_SIGNUP = 'USER_CONFIRM_SIGNUP';
export const USER_CONFIRM_SIGNUP_SUCCESS = 'USER_CONFIRM_SIGNUP_SUCCESS';
export const USER_CONFIRM_SIGNUP_FAILED = 'USER_CONFIRM_SIGNUP_FAILED';

export const USER_RESEND_CONFIRM_SIGNUP = 'USER_RESEND_CONFIRM_SIGNUP';
export const USER_RESEND_CONFIRM_SIGNUP_SUCCESS = 'USER_RESEND_CONFIRM_SIGNUP_SUCCESS';
export const USER_RESEND_CONFIRM_SIGNUP_FAILED = 'USER_RESEND_CONFIRM_SIGNUP_FAILED';

export const USER_SIGNIN = 'USER_SIGNIN';
export const USER_SIGNIN_SUCCESS = 'USER_SIGNIN_SUCCESS';
export const USER_SIGNIN_FAILED = 'USER_SIGNIN_FAILED';

export const USER_FORGOT_PASSWORD = 'USER_FORGOT_PASSWORD';
export const USER_FORGOT_PASSWORD_SUCCESS = 'USER_FORGOT_PASSWORD_SUCCESS';
export const USER_FORGOT_PASSWORD_FAILED = 'USER_FORGOT_PASSWORD_FAILED';

export const USER_CONFIRM_FORGOT_PASSWORD = 'USER_CONFIRM_FORGOT_PASSWORD';
export const USER_CONFIRM_FORGOT_PASSWORD_SUCCESS = 'USER_CONFIRM_FORGOT_PASSWORD_SUCCESS';
export const USER_CONFIRM_FORGOT_PASSWORD_FAILED = 'USER_CONFIRM_FORGOT_PASSWORD_FAILED';

export const USER_SIGNOUT = 'USER_SIGNOUT';

export const GET_USER_DETAILS = 'GET_USER_DETAILS';
export const GET_USER_DETAILS_SUCCESS = 'GET_USER_DETAILS_SUCCESS';
export const GET_USER_DETAILS_FAILED = 'GET_USER_DETAILS_FAILED';


export interface SignUpData {
  email: string,
  password: string,
  username: string
}

export interface ConfirmSignUpData {
  username: string,
  email:string,
  authCode: string
}

export interface ResendConfirmSignUpData {
  username: string,
  email:string
}

export interface LoginData {
  username: string,
  email:string,
  password: string
}

export interface forgotPasswordData {
  username: string
}

export interface confirmForgotPasswordData {
  email: string,
  username: string,
  code: string,
  new_password: string,
}

export interface UserDetails {
  name: string,
  username: string,
  email:string,
  password: string,
  profilepic: string,
}

export type SignupAction =
  | { type: 'USER_SIGNUP'; data: SignUpData }
  | { type: 'USER_SIGNUP_SUCCESS'; message: any }
  | { type: 'USER_SIGNUP_FAILED'; error: string };
  

export type ConfirmSignUpAction =
  | { type: 'USER_CONFIRM_SIGNUP'; data: ConfirmSignUpData }
  | { type: 'USER_CONFIRM_SIGNUP_SUCCESS'; message: string }
  | { type: 'USER_CONFIRM_SIGNUP_FAILED'; error: string };


export type ResendConfirmSignUpAction =
  | { type: 'USER_RESEND_CONFIRM_SIGNUP'; data: ResendConfirmSignUpData }
  | { type: 'USER_RESEND_CONFIRM_SIGNUP_SUCCESS'; message: string }
  | { type: 'USER_RESEND_CONFIRM_SIGNUP_FAILED'; error: string };

export type LoginAction =
  | { type: 'USER_SIGNIN'; data: LoginData }
  | { type: 'USER_SIGNIN_SUCCESS'; message: string }
  | { type: 'USER_SIGNIN_FAILED'; error: string }
  | { type: 'USER_SIGNOUT'; error: string };

export type ForgotPasswordAction =
| { type: 'USER_FORGOT_PASSWORD'; data: forgotPasswordData }
| { type: 'USER_FORGOT_PASSWORD_SUCCESS'; message: string }
| { type: 'USER_FORGOT_PASSWORD_FAILED'; error: string };

export type ConfirmForgotPasswordAction =
| { type: 'USER_CONFIRM_FORGOT_PASSWORD'; data: confirmForgotPasswordData }
| { type: 'USER_CONFIRM_FORGOT_PASSWORD_SUCCESS'; message: string }
| { type: 'USER_CONFIRM_FORGOT_PASSWORD_FAILED'; error: string };

export type UserDetailAction =
  | { type: 'GET_USER_DETAILS'; data: UserDetails }
  | { type: 'GET_USER_DETAILS_SUCCESS'; message: string }
  | { type: 'GET_USER_DETAILS_FAILED'; error: string };


export function userSignUp(data: SignUpData): SignupAction {
  return {
    type: USER_SIGNUP,
    data
  };
}

export function userSignUpSuccess(message: any) {

  return {
    type: USER_SIGNUP_SUCCESS,
    message: message
  };
}

export function userSignUpFailed(error: string) {
  return {
    type: USER_SIGNUP_FAILED,
    error
  };
}

export function userConfirmSignUp(data: ConfirmSignUpData): ConfirmSignUpAction {
  return {
    type: USER_CONFIRM_SIGNUP,
    data
  };
}

export function userConfirmSignUpSuccess(message: string) {

  return {
    type: USER_CONFIRM_SIGNUP_SUCCESS,
    message
  };
}

export function userConfirmSignUpFailed(error: string) {

  return {
    type: USER_CONFIRM_SIGNUP_FAILED,
    error
  };
}


export function userResendConfirmSignUp(data: ResendConfirmSignUpData): ResendConfirmSignUpAction {
  return {
    type: USER_RESEND_CONFIRM_SIGNUP,
    data
  };
}

export function userResendConfirmSignUpSuccess(message: string) {

  return {
    type: USER_RESEND_CONFIRM_SIGNUP_SUCCESS,
    message
  };
}

export function userResendConfirmSignUpFailed(error: string) {

  return {
    type: USER_RESEND_CONFIRM_SIGNUP_FAILED,
    error
  };
}

export function userSignIn(data: LoginData) {
  return {
    type: USER_SIGNIN,
    data
  };
}

export function userSignInRemoveProps() {
  return {
    type: USER_SIGNIN    
  };
}

export function userSignUpRemoveProps() {
  return {
    type: USER_SIGNIN    
  };
}


export function userSignInSuccess(message: string) {

  return {
    type: USER_SIGNIN_SUCCESS,
    message
  };
}

export function userSignInFailed(error: string) {

  return {
    type: USER_SIGNIN_FAILED,
    error
  };
}

export function userForgotPassword(data: forgotPasswordData) {

  return {
    type: USER_FORGOT_PASSWORD,
    data
  };
}

export function userForgotPasswordSuccess(message: string) {

  return {
    type: USER_FORGOT_PASSWORD_SUCCESS,
    message
  };
}

export function userForgotPasswordFailed(error: string) {

  return {
    type: USER_FORGOT_PASSWORD_FAILED,
    error
  };
}

export function userConfirmForgotPassword(data: confirmForgotPasswordData) {

  return {
    type: USER_CONFIRM_FORGOT_PASSWORD,
    data
  };
}

export function userConfirmForgotPasswordSuccess(message: string) {

  return {
    type: USER_CONFIRM_FORGOT_PASSWORD_SUCCESS,
    message
  };
}

export function userConfirmForgotPasswordFailed(error: string) {

  return {
    type: USER_CONFIRM_FORGOT_PASSWORD_FAILED,
    error
  };
}

export const userSignOut = () => ({
  type: USER_SIGNOUT,
});

export function userDetails(data: UserDetails) {

  return {
    type: GET_USER_DETAILS,
    payload: data
  };
}

export function userDetailsSuccess(message: string) {

  return {
    type: GET_USER_DETAILS_SUCCESS,
    message
  };
}

export function userDetailsFailed(error: string) {

  return {
    type: GET_USER_DETAILS_FAILED,
    error
  };
}