import {
  fetchUserProfile as fetchUserProfileAction,
  editUserProfile as editUserProfileAction
}
  from '../../../../actions/profile.actions';
import {
  uploadFile as uploadFileAction
} from '../../../../actions/fileUpload.actions';

export interface EditProfileState {
  email: string;
  id: string;
  username: string;
  display_name: string;
  about: string;
  wallet_token: Array<any>;
  profile_url: string;
  selectedFile: any;
  imagePreviewUrl: any;
  address: string;
  social_media: {
    twitter: string;
    reddit: string;
    other: string;
  };
}

export interface stateProps {
  fetchProfile: {
    message: any,
    error: string,
    isFetchProfileSuccess: boolean,
    isLoading: boolean
  },
  editProfile: {
    message: string,
    error: string,
    isEditProfileSuccess: boolean,
    isLoading: boolean
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
  }
}

export interface PropsFromDispatch {
  fetchUserProfile: typeof fetchUserProfileAction,
  editUserProfile: typeof editUserProfileAction,
  uploadFile: typeof uploadFileAction,
  handleImageChange: Function,
  onSubmit: any
}