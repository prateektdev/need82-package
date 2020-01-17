
export interface FetchStoreState {
  isLoading: boolean;
  error: string;
  message: any;
  isFetchStoreSuccess: boolean,
}

export const initialStateFetchStore: FetchStoreState = {
  error: '',
  isLoading: false,
  message: '',
  isFetchStoreSuccess: false,
};

export interface FetchAllStoreState {
  isLoading: boolean;
  error: string;
  message: any;
  isFetchAllStoreSuccess: boolean,
}

export const initialStateFetchAllStore: FetchAllStoreState = {
  error: '',
  isLoading: false,
  message: '',
  isFetchAllStoreSuccess: false,
};

export interface AddStoreState {
  isLoading: boolean;
  error: string;
  message: any;
  isAddStoreSuccess: boolean,
}

export const initialStateAddStore: AddStoreState = {
  error: '',
  isLoading: false,
  message: '',
  isAddStoreSuccess: false,
};

export interface UploadFileInitiateState {
  isUpLoading: boolean;
  error: string;
  message: any;
  isAddStoreSuccess: boolean,
}

export const initialStateUploadFileInitiate: UploadFileInitiateState = {
  error: '',
  isUpLoading: false,
  message: '',
  isAddStoreSuccess: false,
};

export interface UploadFileState {
  isUpLoaded: boolean;
  error: string;
  message: any;
  isFileUploadSuccess: boolean;
}

export const initialStateUploadFile: UploadFileState = {
  error: '',
  isUpLoaded: false,
  message: '',
  isFileUploadSuccess: false
};

export interface FetchStoreCategoriesState {
  isLoading: boolean;
  error: string;
  message: any;
  isFetchStoreCategories: boolean,
}

export const initialStateFetchStoreCategoriesState: FetchStoreCategoriesState = {
  error: '',
  isLoading: false,
  message: '',
  isFetchStoreCategories: false,
};

export interface FetchStoreDetailsState {
  isLoading: boolean;
  error: string;
  message: any;
  isFetchStoreDetails: boolean,
}

export const initialStateFetchStoreDetailsState: FetchStoreDetailsState = {
  error: '',
  isLoading: false,
  message: '',
  isFetchStoreDetails: false,
};

export interface VerifyFileUploadState {
  isVerifying: boolean;
  error: string;
  message: any;
  isFileUploadVerifiedSuccess: boolean,
}

export const initialStateVerifyFileUpload: VerifyFileUploadState = {
  error: '',
  isVerifying: false,
  message: '',
  isFileUploadVerifiedSuccess: false,
};

export interface FetchCurrentStoreState {
  isLoading: boolean;
  error: string;
  message: any;
}

export const initialStateFetchCurrentStoreState: FetchCurrentStoreState = {
  error: '',
  message: '',
  isLoading: false
};

export interface FetchUserStoreState {
  isLoading: boolean;
  error: string;
  message: any;
}

export const initialStateFetchUserStoreState: FetchUserStoreState = {
  error: '',
  message: '',
  isLoading: false
};

