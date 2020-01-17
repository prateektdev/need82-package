import {
  FETCH_STORE,
  FETCH_STORE_SUCCESS,
  FETCH_STORE_FAILED,
  FETCH_ALL_STORE,
  FETCH_ALL_STORE_SUCCESS,
  FETCH_ALL_STORE_FAILED,
  ADD_STORE,
  ADD_STORE_SUCCESS,
  ADD_STORE_FAILED,
  FetchStoreAction,
  FetchAllStoreAction,
  AddStoreAction,
  FETCH_CURRENT_STORE,
  FETCH_CURRENT_STORE_SUCCESS,
  FETCH_CURRENT_STORE_FAILED,
  FetchCurrentStoreAction,
  FETCH_USER_STORE_FAILED,
  FETCH_USER_STORE_SUCCESS,
  FETCH_USER_STORE,
  FetchUserStoreAction
} from '../../actions/store.actions';

import {
  FetchStoreState,
  initialStateFetchStore,
  initialStateFetchAllStore,
  FetchAllStoreState,
  initialStateAddStore,
  AddStoreState,
  FetchCurrentStoreState,
  initialStateFetchCurrentStoreState,
  FetchUserStoreState,
  initialStateFetchUserStoreState
} from '../../interfaces/store.interface';

export const fetchStore = function (state = initialStateFetchStore, action: FetchStoreAction): FetchStoreState {
  switch (action.type) {
    case FETCH_STORE:
      return ({
        ...state,
        isLoading: true,
        isFetchStoreSuccess: false,
      });
    case FETCH_STORE_SUCCESS:
      return ({
        ...state,
        message: action.message,
        isLoading: false,
        error: '',
        isFetchStoreSuccess: true
      });
    case FETCH_STORE_FAILED:
      return ({
        ...state,
        isLoading: false,
        error: action.error,
      });
    default:
      return state;
  }
};

export const fetchAllStore = function (state = initialStateFetchAllStore, action: FetchAllStoreAction): FetchAllStoreState {
  switch (action.type) {
    case FETCH_ALL_STORE:
      return ({
        ...state,
        isLoading: true,
        isFetchAllStoreSuccess: false
      });
    case FETCH_ALL_STORE_SUCCESS:
      return ({
        ...state,
        message: action.message,
        isLoading: false,
        error: '',
        isFetchAllStoreSuccess: true
      });
    case FETCH_ALL_STORE_FAILED:
      return ({
        ...state,
        isLoading: false,
        error: action.error,
      });
    default:
      return state;
  }
};

export const addStore = function (state = initialStateAddStore, action: AddStoreAction): AddStoreState {
  switch (action.type) {
    case ADD_STORE:
      return ({
        ...state,
        isLoading: true,
        isAddStoreSuccess: false
      });
    case ADD_STORE_SUCCESS:
      return ({
        ...state,
        message: action.message,
        isLoading: false,
        error: '',
        isAddStoreSuccess: true
      });
    case ADD_STORE_FAILED:
      return ({
        ...state,
        isLoading: false,
        error: action.error,
      });
    default:
      return state;
  }
};
export const fetchCurrentStore = function (state = initialStateFetchCurrentStoreState, action: FetchCurrentStoreAction): FetchCurrentStoreState {
  switch (action.type) {
    case FETCH_CURRENT_STORE:
      return ({
        ...state,
        isLoading: true,
      });
    case FETCH_CURRENT_STORE_SUCCESS:
      return ({
        ...state,
        message: action.message,
        isLoading: false,
        error: '',
      });
    case FETCH_CURRENT_STORE_FAILED:
      return ({
        ...state,
        isLoading: false,
        error: action.error,
      });
    default:
      return state;
  }
};


export const fetchUserStore = function (state = initialStateFetchUserStoreState, action: FetchUserStoreAction): FetchUserStoreState {
  switch (action.type) {
    case FETCH_USER_STORE:
      return ({
        ...state,
        isLoading: true,
      });
    case FETCH_USER_STORE_SUCCESS:
      return ({
        ...state,
        message: action.message,
        isLoading: false,
        error: '',
      });
    case FETCH_USER_STORE_FAILED:
      return ({
        ...state,
        isLoading: false,
        error: action.error,
      });
    default:
      return state;
  }
};

