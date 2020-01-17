import {
  UPLOAD_FILE_INITIATE,
  UPLOAD_FILE_INITIATE_SUCCESS,
  UPLOAD_FILE_INITIATE_FAILED,
  VERIFY_FILE_UPLOAD_SUCCESS,
  VERIFY_FILE_UPLOAD_FAILED,
  UPLOAD_FILE_SUCCESS,
  UPLOAD_FILE_FAILED,
  UploadInitiateFileAction,
} from '../../actions/fileUpload.actions';

import {
  UploadFileInitiateState,
  initialStateUploadFileInitiate,
} from '../../interfaces/fileUpload.interface';

export const uploadFileInitiate = function (state = initialStateUploadFileInitiate, action: UploadInitiateFileAction): UploadFileInitiateState {
  switch (action.type) {
    case UPLOAD_FILE_INITIATE:
      return ({
        ...state,
        isInitiating: true,
        messageInitiating: '',
        messageVerifying: '',
        errorInitiating: '',
        isFileUploadInitiateSuccess: false,
        isFileUploadSuccess: false,
        isFileUploadVerifiedSuccess: false
      });
    case UPLOAD_FILE_INITIATE_SUCCESS:
      return ({
        ...state,
        isInitiating: false,
        isUpLoading: true,
        messageInitiating: action.message,
        errorInitiating: '',
        isFileUploadInitiateSuccess: true
      });
    case UPLOAD_FILE_INITIATE_FAILED:
      return ({
        ...state,
        isInitiating: false,
        isUpLoading: false,
        messageInitiating: '',
        errorInitiating: action.error,
        isFileUploadInitiateSuccess: false
      });
    case UPLOAD_FILE_SUCCESS:
      return ({
        ...state,
        isUpLoading: false,
        isVerifying: true,
        messageUploading: action.message,
        errorUploading: '',
        isFileUploadSuccess: true
      });
    case UPLOAD_FILE_FAILED:
      return ({
        ...state,
        isUpLoading: false,
        messageUploading: '',
        errorUploading: action.error,
        isFileUploadSuccess: false
      });
    case VERIFY_FILE_UPLOAD_SUCCESS:
      return ({
        ...state,
        isVerifying: false,
        messageVerifying: action.message,
        errorVerifying: '',
        isFileUploadVerifiedSuccess: true
      });
    case VERIFY_FILE_UPLOAD_FAILED:
      return ({
        ...state,
        isVerifying: false,
        messageVerifying: '',
        errorVerifying: action.error,
        isFileUploadVerifiedSuccess: false
      });
    default:
      return state;
  }
};