export const UPLOAD_FILE_INITIATE = 'UPLOAD_FILE_INITIATE';
export const UPLOAD_FILE_INITIATE_SUCCESS = 'UPLOAD_FILE_INITIATE_SUCCESS';
export const UPLOAD_FILE_INITIATE_FAILED = 'UPLOAD_FILE_INITIATE_FAILED';

export const UPLOAD_FILE = 'UPLOAD_FILE';
export const UPLOAD_FILE_SUCCESS = 'UPLOAD_FILE_SUCCESS';
export const UPLOAD_FILE_FAILED = 'UPLOAD_FILE_FAILED';

export const VERIFY_FILE_UPLOAD = 'VERIFY_FILE_UPLOAD';
export const VERIFY_FILE_UPLOAD_SUCCESS = 'VERIFY_FILE_UPLOAD_SUCCESS';
export const VERIFY_FILE_UPLOAD_FAILED = 'VERIFY_FILE_UPLOAD_FAILED';

export interface uploadFileData {
  url: string,
  file: any,
  fileData:any,
  fileType: string,
  type: string,
  path: string
}


export type FileUploadAction =
  | { type: 'FILE_UPLOAD'; data: uploadFileData }
  | { type: 'FILE_UPLOAD_SUCCESS'; message: string }
  | { type: 'FILE_UPLOAD_FAILED'; error: string };


export type UploadInitiateFileAction =
  | { type: 'UPLOAD_FILE_INITIATE'; data: uploadFileData }
  | { type: 'UPLOAD_FILE_INITIATE_SUCCESS'; message: string }
  | { type: 'UPLOAD_FILE_INITIATE_FAILED'; error: string }
  | { type: 'UPLOAD_FILE'; data: uploadFileData }
  | { type: 'UPLOAD_FILE_SUCCESS'; message: string }
  | { type: 'UPLOAD_FILE_FAILED'; error: string }
  | { type: 'VERIFY_FILE_UPLOAD'; data: uploadFileData }
  | { type: 'VERIFY_FILE_UPLOAD_SUCCESS'; message: string }
  | { type: 'VERIFY_FILE_UPLOAD_FAILED'; error: string };

export type UploadFileAction =
  | { type: 'UPLOAD_FILE'; data: uploadFileData }
  | { type: 'UPLOAD_FILE_SUCCESS'; message: string }
  | { type: 'UPLOAD_FILE_FAILED'; error: string };

export type VerifyFileUploadAction =
  | { type: 'VERIFY_FILE_UPLOAD'; data: uploadFileData }
  | { type: 'VERIFY_FILE_UPLOAD_SUCCESS'; message: string }
  | { type: 'VERIFY_FILE_UPLOAD_FAILED'; error: string };

export function uploadFileInitiate(data: uploadFileData): UploadInitiateFileAction {
  return {
    type: UPLOAD_FILE_INITIATE,
    data
  };
}

export function uploadFileInitiateSuccess(message: string) {
  return {
    type: UPLOAD_FILE_INITIATE_SUCCESS,
    message
  };
}

export function uploadFileInitiateFailed(error: string) {
  return {
    type: UPLOAD_FILE_INITIATE_FAILED,
    error
  };
}

export function verifyFileUpload(data: uploadFileData): UploadInitiateFileAction {
  return {
    type: VERIFY_FILE_UPLOAD,
    data
  };
}

export function verifyFileUploadSuccess(message: string) {
  return {
    type: VERIFY_FILE_UPLOAD_SUCCESS,
    message
  };
}

export function verifyFileUploadFailed(error: string) {
  return {
    type: VERIFY_FILE_UPLOAD_FAILED,
    error
  };
}

export function uploadFile(data: uploadFileData): UploadInitiateFileAction {
  return {
    type: UPLOAD_FILE,
    data
  };
}

export function uploadFileSuccess(message: string) {
  return {
    type: UPLOAD_FILE_SUCCESS,
    message
  };
}

export function uploadFileFailed(error: string) {
  return {
    type: UPLOAD_FILE_FAILED,
    error
  };
}
