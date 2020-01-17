import {
  fetchStoreData as fetchStoreDataAction
}
  from '../../../../../actions/store.actions';

export interface StoresItemsState {
  store: any,
  pagination: any,
  size: number,
  lastKey:string
}


export interface stateProps {
  fetchStore: {
    message: string,
    error: string,
    isFetchStoreSuccess: boolean,
    isLoading: boolean
  }
}

export interface PropsFromDispatch {
  fetchStoreData: typeof fetchStoreDataAction
}