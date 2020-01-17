export const FETCH_PROFILE = 'FETCH_PROFILE';
export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS';
export const FETCH_PROFILE_FAILED = 'FETCH_PROFILE_FAILED';

export const EDIT_PROFILE = 'EDIT_PROFILE';
export const EDIT_PROFILE_SUCCESS = 'EDIT_PROFILE_SUCCESS';
export const EDIT_PROFILE_FAILED = 'EDIT_PROFILE_FAILED';

export interface UserData {
  username: string,
  display_name: string,
  walletAddress: string,
  image: String,
  about: string,
  socialMedia: {
    social_media: {
      twitter: '',
      reddit: '',
      other: ''
    }
  }
}

export type FetchProfileAction =
  | { type: 'FETCH_PROFILE'; }
  | { type: 'FETCH_PROFILE_SUCCESS'; message: string }
  | { type: 'FETCH_PROFILE_FAILED'; error: string };


export type EditProfileAction =
  | { type: 'EDIT_PROFILE'; data: UserData }
  | { type: 'EDIT_PROFILE_SUCCESS'; message: string }
  | { type: 'EDIT_PROFILE_FAILED'; error: string };


export function fetchUserProfile(): FetchProfileAction {
  return {
    type: FETCH_PROFILE
  };
}

export function fetchUserProfileSuccess(message: string) {

  return {
    type: FETCH_PROFILE_SUCCESS,
    message
  };
}

export function fetchUserProfileFailed(error: string) {

  return {
    type: FETCH_PROFILE_FAILED,
    error
  };
}

export function editUserProfile(data: UserData): EditProfileAction {
  return {
    type: EDIT_PROFILE,
    data
  };
}

export function editUserProfileSuccess(message: string) {

  return {
    type: EDIT_PROFILE_SUCCESS,
    message
  };
}

export function editUserProfileFailed(error: string) {

  return {
    type: EDIT_PROFILE_FAILED,
    error
  };
}
