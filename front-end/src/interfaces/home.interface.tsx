export interface AllListingState {
  isLoading: boolean;
  error: string;
  message: any;
  isFetchListingSuccess: boolean,
}

export const initialStateFetchListing: AllListingState = {
  error: '',
  isLoading: false,
  message: '',
  isFetchListingSuccess: false,
};

export interface FetchAllStoreState {
  isLoading: boolean;
  error: string;
  message: any;
  isFetchAllStoreSuccess: boolean,
}

export const initialStateFetchAllStore: FetchAllStoreState = {
  error: '',
  isLoading: false,
  message: '',
  isFetchAllStoreSuccess: false,
};