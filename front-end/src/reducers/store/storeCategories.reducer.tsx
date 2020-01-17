import {
  GET_STORE_CATEGORIES,
  GET_STORE_CATEGORIES_SUCCESS,
  GET_STORE_CATEGORIES_FAILED,
  GetStoreCategoriesAction
} from '../../actions/store.actions';

import {
  FetchStoreCategoriesState,
  initialStateFetchStoreCategoriesState,
} from '../../interfaces/store.interface';

export const fetchStoreCategories = function (state = initialStateFetchStoreCategoriesState, action: GetStoreCategoriesAction): FetchStoreCategoriesState {
  switch (action.type) {
    case GET_STORE_CATEGORIES:
      return ({
        ...state,
        isLoading: true,
        isFetchStoreCategories: false,
      });
    case GET_STORE_CATEGORIES_SUCCESS:
      return ({
        ...state,
        message: action.message,
        isLoading: false,
        error: '',
        isFetchStoreCategories: true
      });
    case GET_STORE_CATEGORIES_FAILED:
      return ({
        ...state,
        isLoading: false,
        error: action.error,
      });
    default:
      return state;
  }
};
