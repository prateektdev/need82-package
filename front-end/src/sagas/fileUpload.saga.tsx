import {
  takeEvery,
  put,
  call
} from 'redux-saga/effects';

import {
  UPLOAD_FILE_INITIATE,
  uploadFileInitiateSuccess,
  uploadFileInitiateFailed,
  verifyFileUploadSuccess,
  verifyFileUploadFailed,
  uploadFileSuccess,
  uploadFileFailed
} from '../actions/fileUpload.actions';

import {
  uploadFileInitiate,
  verifyFileUplad
} from '../constants/config';

import { postRequest, getRequest, postFileRequest } from '../utils/api';

function* verifyFileUploadReq(path:string) {
  try {
    const response = yield call(getRequest, path);
    yield put(verifyFileUploadSuccess(response));
  } catch (err) {
    yield put(verifyFileUploadFailed(err.message));
    yield call(verifyFileUploadReq,path);
  }
}

function* uploadInitiateFileReq(action: any) {
  try {
    const { data } = action;
    const initiateUploadResponse = yield call(postRequest, uploadFileInitiate, data);
    yield put(uploadFileInitiateSuccess(initiateUploadResponse));
    try {
      const uploadFileResponse = yield call(postFileRequest, initiateUploadResponse.url, data.fileData, data.fileType);
      yield put(uploadFileSuccess(uploadFileResponse));
      yield call(verifyFileUploadReq, verifyFileUplad + '?' + 'type=' + data.type + '&' + 'path=' + initiateUploadResponse.path);
    } catch (err) {
      yield put(uploadFileFailed(err.message));
    }
  } catch (err) {
    yield put(uploadFileInitiateFailed(err.message));
  }

}

export default [
  takeEvery(UPLOAD_FILE_INITIATE, uploadInitiateFileReq),
];