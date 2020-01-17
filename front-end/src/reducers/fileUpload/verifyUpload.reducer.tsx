import {
  VerifyFileUploadAction,
  VERIFY_FILE_UPLOAD,
  VERIFY_FILE_UPLOAD_SUCCESS,
  VERIFY_FILE_UPLOAD_FAILED,
} from '../../actions/fileUpload.actions';

import {
  VerifyFileUploadState,
  initialStateVerifyFileUpload,
} from '../../interfaces/store.interface';

export const verifyFileUpload = function (state = initialStateVerifyFileUpload, action: VerifyFileUploadAction): VerifyFileUploadState {
  switch (action.type) {
    case VERIFY_FILE_UPLOAD:
      return ({
        ...state,
        isVerifying: true,
        isFileUploadVerifiedSuccess: false
      });
    case VERIFY_FILE_UPLOAD_SUCCESS:
      return ({
        ...state,
        message: action.message,
        isVerifying: false,
        error: '',
        isFileUploadVerifiedSuccess: true
      });
    case VERIFY_FILE_UPLOAD_FAILED:
      return ({
        ...state,
        isVerifying: true,
        error: action.error,
        isFileUploadVerifiedSuccess:true
      });
    default:
      return state;
  }
};