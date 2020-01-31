import {
  addStore as addStoreAction,
  fetchStoreCategories as fetchStoreCategoriesAction,

} from '../../../../actions/store.actions';
import {
  uploadFile as uploadFileAction
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
  showMintOptions: boolean,
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
  uploadFile: {
    isUpLoaded: boolean;
    isFileUploadSuccess: boolean;
    errorUploading: string;
    messageUploading: any;
  }
}


export interface PropsFromDispatch {
  addStore: typeof addStoreAction
  uploadFile: typeof uploadFileAction,
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
