import {
  FETCH_PROFILE,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILED,
  FetchProfileAction,
  EditProfileAction,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAILED,
  EDIT_PROFILE
} from '../actions/profile.actions';


interface ProfileState {
  isLoading: boolean;
  error: string;
  message: any;
  isFetchProfileSuccess: boolean,
}

const initialStateProfile: ProfileState = {
  error: '',
  isLoading: false,
  message: '',
  isFetchProfileSuccess: false,
};

interface EditProfileState {
  isLoading: boolean;
  error: string;
  message: any;
  isEditProfileSuccess: boolean,
}

const initialStateEditProfile: EditProfileState = {
  error: '',
  isLoading: false,
  message: '',
  isEditProfileSuccess: false,
};

export const fetchProfile = function (state = initialStateProfile, action: FetchProfileAction): ProfileState {
  switch (action.type) {
    case FETCH_PROFILE:
      return ({
        ...state,
        error: '',
        isLoading: true,
        isFetchProfileSuccess: false
      });
    case FETCH_PROFILE_SUCCESS:
      return ({
        ...state,
        message: action.message,
        isLoading: false,
        error: '',
        isFetchProfileSuccess: true
      });
    case FETCH_PROFILE_FAILED:
      return ({
        ...state,
        isLoading: false,
        error: action.error,
      });
    default:
      return state;
  }
};

export const editProfile = function (state = initialStateEditProfile, action: EditProfileAction): EditProfileState {
  switch (action.type) {
    case EDIT_PROFILE:
      return ({
        ...state,
        error: '',
        isLoading: true,
        isEditProfileSuccess:false
      });
    case EDIT_PROFILE_SUCCESS:
      return ({
        ...state,
        message: action.message,
        isLoading: false,
        error: '',
        isEditProfileSuccess: true
      });
    case EDIT_PROFILE_FAILED:
      return ({
        ...state,
        isLoading: false,
        error: action.error,
      });
    default:
      return state;
  }
};