import {
  takeEvery,
  put,
  call
} from 'redux-saga/effects';
import { uploadFile } from '../constants/config';
import { postRequest, postFileRequest } from '../utils/api';
import {
  UPLOAD_FILE,
  uploadFileSuccess,
  uploadFileFailed
} from '../actions/fileUpload.actions';

function* uploadFileReq(action: any) {
  try {
    const { data } = action;
    for (var [key, value] of data.entries()) { 
      console.log(key, value);
     }
    console.log('data : ',data)
    const response = yield call(postFileRequest, uploadFile, data,'jpg');
    yield put(uploadFileSuccess(response));
  } catch (err) {
    yield put(uploadFileFailed(err.message));
  }
}

export default [
  takeEvery(UPLOAD_FILE, uploadFileReq)
];