import {
  fetchAllItemData as fetchAllItemDataAction,
  fetchAllItemDataSuccess as fetchAllItemDataSuccessAction,
}
  from '../../../../actions/item.actions';
import {

  fetchStoreData as fetchStoreDataAction,
  fetchStoreDataSuccess as fetchStoreDataSuccessAction,
  fetchStoreDetails as fetchStoreDetailsAction,
  fetchStoreDetailsSuccess as fetchStoreDetailsSuccessAction
}
  from '../../../../actions/store.actions';
export interface ViewStoreState {
  store: any,
  items: Array<any>,
  pagination: any,
  size: number,
  lastKey: string,
  selectedCategory: string
}

export interface stateProps {
  fetchStore: {
    message: string,
    error: string,
    isLoading: boolean,
    isFetchStoreSuccess: boolean
  },
  fetchStoreDetails: {
    message: string,
    error: string,
    isLoading: boolean,
    isFetchStoreDetails: boolean
  }
}

export interface PropsFromDispatch {
  fetchAllItemData: typeof fetchAllItemDataAction,
  fetchStoreData: typeof fetchStoreDataAction,
  fetchStoreDataSuccess: typeof fetchStoreDataSuccessAction,
  fetchStoreDetails: typeof fetchStoreDetailsAction,
  fetchStoreDetailsSuccess: typeof fetchStoreDetailsSuccessAction,
  fetchAllItemDataSuccess: typeof fetchAllItemDataSuccessAction
}