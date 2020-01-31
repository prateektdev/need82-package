import {
  UploadFileAction,
  UPLOAD_FILE,
  UPLOAD_FILE_SUCCESS,
  UPLOAD_FILE_FAILED
} from '../../actions/fileUpload.actions';

import {
  initialStateUploadFile,
  UploadFileState
} from '../../interfaces/store.interface';

export const uploadFile = function (state = initialStateUploadFile, action: UploadFileAction): UploadFileState {
  switch (action.type) {
    case UPLOAD_FILE:
      return ({
        ...state,
        isUpLoaded: true,
        isFileUploadSuccess: false
      });
    case UPLOAD_FILE_SUCCESS:
      return ({
        ...state,
        message: action.message,
        isUpLoaded: false,
        error: '',
        isFileUploadSuccess: true
      });
    case UPLOAD_FILE_FAILED:
      return ({
        ...state,
        error: action.error,
        isUpLoaded: false,
        isFileUploadSuccess: false
      });
    default:
      return state;
  }
};