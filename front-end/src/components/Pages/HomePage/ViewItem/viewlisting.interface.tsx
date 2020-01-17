import {
  fetchListingData as fetchListingDataAction
}
  from '../../../../actions/home.actions';

export interface FetchListingState {
  items: Array<any>,
  pagination: any,
  size: number,
  lastKey: string
}

export interface stateProps {
  fetchAllListing: {
    message: string,
    error: string,
    isLoading: boolean,
    isFetchListingSuccess: boolean
  }
}

export interface PropsFromDispatch {
  fetchListingData: typeof fetchListingDataAction,
}
