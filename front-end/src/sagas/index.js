import {
  all
} from 'redux-saga/effects';

import watchSignInAction from './signIn.saga';
import watchSignUpAction from './signup.saga';
import watchforgotPasswordAction from './forgotPassword.saga';
import watchProfileAction from './profile.saga';
import watchStoreAction from './store.saga';
import watchFileUploadAction from './fileUpload.saga';
import watchHomeAction from './home.saga';
import watchPackageAction from './package.saga';



const rootSaga = function* () {
  yield all([
    ...watchSignInAction,
    ...watchSignUpAction,
    ...watchforgotPasswordAction,
    ...watchProfileAction,
    ...watchStoreAction,
    ...watchFileUploadAction,
    ...watchHomeAction,
    ...watchPackageAction
  ]);
};

export default rootSaga;