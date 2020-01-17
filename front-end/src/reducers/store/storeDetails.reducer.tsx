import {
  FETCH_STORE_DETAILS,
  FETCH_STORE_DETAILS_SUCCESS,
  FETCH_STORE_DETAILS_FAILED,
  FetchStoreDetailsAction
} from '../../actions/store.actions';

import {
  FetchStoreDetailsState,
  initialStateFetchStoreDetailsState,
} from '../../interfaces/store.interface';

export const fetchStoreDetails = function (state = initialStateFetchStoreDetailsState, action: FetchStoreDetailsAction): FetchStoreDetailsState {
  switch (action.type) {
    case FETCH_STORE_DETAILS:
      return ({
        ...state,
        isLoading: true,
        isFetchStoreDetails: false,
      });
    case FETCH_STORE_DETAILS_SUCCESS:
      return ({
        ...state,
        message: action.message,
        isLoading: false,
        error: '',
        isFetchStoreDetails: true
      });
    case FETCH_STORE_DETAILS_FAILED:
      return ({
        ...state,
        isLoading: false,
        error: action.error,
      });
    default:
      return state;
  }
};
