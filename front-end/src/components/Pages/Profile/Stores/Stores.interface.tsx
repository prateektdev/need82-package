import {
  fetchUserStoreData as fetchUserStoreDataAction,
  fetchUserStoreDataSuccess as fetchUserStoreDataSuccessAction,
}
  from '../../../../actions/store.actions';

export interface StoreState {
  stores: Array<any>,
  pagination: any,
  showAll: boolean,
  showSingle: boolean,
  selectedStore: string
  size: number,
  lastKey: string,
  title: string
}


export interface stateProps {
  fetchUserStore: {
    message: string,
    error: string,
    isLoading: boolean
  }
}

export interface PropsFromDispatch {
  fetchUserStoreData: typeof fetchUserStoreDataAction,
  fetchUserStoreDataSuccess: typeof fetchUserStoreDataSuccessAction,
}