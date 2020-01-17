
export interface UploadFileInitiateState {
  isInitiating: boolean;
  isUpLoading: boolean;
  isVerifying: boolean;
  isFileUploadInitiateSuccess: boolean;
  isFileUploadSuccess: boolean;
  isFileUploadVerifiedSuccess: boolean,
  errorInitiating: string;
  errorUploading: string;
  errorVerifying: string;
  messageInitiating: any;
  messageUploading: any;
  messageVerifying: any;
}

export const initialStateUploadFileInitiate: UploadFileInitiateState = {
  isInitiating: false,
  isUpLoading: false,
  isVerifying: false,
  isFileUploadInitiateSuccess: false,
  isFileUploadSuccess: false,
  isFileUploadVerifiedSuccess: false,
  errorInitiating: '',
  errorUploading: '',
  errorVerifying: '',
  messageInitiating: '',
  messageUploading: '',
  messageVerifying: ''
};
