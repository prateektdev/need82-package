import {
  FETCH_ALL_LISTING,
  FETCH_ALL_LISTING_SUCCESS,
  FETCH_ALL_LISTING_FAILED,
  FetchAllListingAction,
} from '../actions/home.actions';

import {
  AllListingState,
  initialStateFetchListing,
} from '../interfaces/home.interface';

export const fetchAllListing = function (state = initialStateFetchListing, action: FetchAllListingAction): AllListingState {
  switch (action.type) {
    case FETCH_ALL_LISTING:
      return ({
        ...state,
        isLoading: true,
        isFetchListingSuccess: false
      });
    case FETCH_ALL_LISTING_SUCCESS:
      return ({
        ...state,
        message: action.message,
        isLoading: false,
        error: '',
        isFetchListingSuccess: true
      });
    case FETCH_ALL_LISTING_FAILED:
      return ({
        ...state,
        isLoading: false,
        error: action.error,
      });
    default:
      return state;
  }
};
