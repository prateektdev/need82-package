import {
  addStore as addStoreAction,
  fetchStoreCategories as fetchStoreCategoriesAction,

} from '../../../../actions/store.actions';
import {
  uploadFileInitiate as uploadFileInitiateAction,
  uploadFile as uploadFileAction,
  verifyFileUpload as verifyFileUploadAction,
  verifyFileUploadSuccess as verifyFileUploadSuccessAction,

} from '../../../../actions/fileUpload.actions';

export interface CreateStoredataState {
  page: number,
  category: string,
  tags: Array<string>,
  editorState: any,
  rows: Array<any>,
  selectedFile: any,
  imagePreviewUrl: string,
  filetype: any,
  enableBatchMinting: boolean,
  mintSize: number,
  mintOptions: Array<any>,
  storeDescription: string,
  showModal: boolean,
  errors: any,
  isLoading: boolean,
  isUpLoading: boolean,
  isUpLoaded: boolean,
  isFileUploadSuccess: boolean,
  isFileUploadVerifyMessage: string
  isFileUploadVerifiedSuccess: boolean,
  showMintOptions:boolean,
}

export interface CreateStoreState {
  editorState: string;
  selectedFile: any;
  imagePreviewUrl: any;
  rows: Array<Object>;
  category: string;
  tags: Array<string>;
  filetype: any;
}

export interface stateProps {
  addStore: {
    message: string;
    error: string;
    isLoading: boolean;
    isAddStoreSuccess: boolean;
  },
  uploadFileInitiate: {
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
  },
  fetchStoreCategories: {
    message: any;
    error: string;
    isLoading: boolean;
    isFetchStoreCategories: boolean;
  }
}


export interface PropsFromDispatch {
  addStore: typeof addStoreAction
  uploadFileInitiate: typeof uploadFileInitiateAction,
  uploadFile: typeof uploadFileAction,
  verifyFileUpload: typeof verifyFileUploadAction,
  verifyFileUploadSuccess :typeof verifyFileUploadSuccessAction,
  handleImageChange: Function,
  handleEditorStateChange: Function,
  onSubmit: Function
}

export interface CreateStoreStepState {
  editorState: string;
  selectedFile: any;
  imagePreviewUrl: any;
}

export interface stateStepProps {
  createStore: {
    message: string,
    error: string,
    isLoading: boolean,
    isSignupSuccess: boolean
  }
}

export interface PropsFromStepDispatch {
  onSubmit: Function,
  handleItemTypeChange: Function
}
