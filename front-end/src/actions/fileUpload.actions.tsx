export const UPLOAD_FILE = 'UPLOAD_FILE';
export const UPLOAD_FILE_SUCCESS = 'UPLOAD_FILE_SUCCESS';
export const UPLOAD_FILE_FAILED = 'UPLOAD_FILE_FAILED';

export interface uploadFileData {
  formData: any
}

export type UploadFileAction =
  | { type: 'UPLOAD_FILE'; data:any }
  | { type: 'UPLOAD_FILE_SUCCESS'; message: string }
  | { type: 'UPLOAD_FILE_FAILED'; error: string };

export function uploadFile(data: any): UploadFileAction {
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
