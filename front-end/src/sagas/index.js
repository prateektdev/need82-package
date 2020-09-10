import {
  all
} from 'redux-saga/effects';

import watchUserAction from './user.saga';
import watchFileUploadAction from './uploadFile.saga'; 
import watchPackageAction from './package.saga';



const rootSaga = function* () {
  yield all([
    ...watchUserAction, 
    ...watchFileUploadAction,
    ...watchPackageAction
  ]);
};

export default rootSaga;