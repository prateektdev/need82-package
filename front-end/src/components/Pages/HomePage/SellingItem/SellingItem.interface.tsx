import {
  fetchAllStoreData as fetchAllStoreDataAction,
}
  from '../../../../actions/store.actions';

export interface StoreState {
  stores: Array<any>,
  pagination: any,
  showAll: boolean,
  showSingle: boolean,
  selectedStore: string,
  size: number,
  lastKey: string,
  title: string
}


export interface stateProps {
  fetchAllStore: {
    message: string,
    error: string,
    isFetchAllStoreSuccess: boolean,
    isLoading: boolean
  }
}

export interface PropsFromDispatch {
  fetchAllStoreData: typeof fetchAllStoreDataAction,
}