export const FETCH_ALL_LISTING = 'FETCH_ALL_LISTING';
export const FETCH_ALL_LISTING_SUCCESS = 'FETCH_ALL_LISTING_SUCCESS';
export const FETCH_ALL_LISTING_FAILED = 'FETCH_ALL_LISTING_FAILED';

export interface ListingData {
  item_id: string,
  image: string,
  title: string,
  itemscount: number,
  size: number,
  lastKey: string,
  category: string
}

export interface StoreData {
  store_id: string,
  title: string,
  itemscount: number,
  sub_title: string,
  tags: Array<string>,
  description: string,
  metadata: any,
  category: string,
  batch_minting: number,
  size: number,
  lastKey: string,
  all: boolean
}

export type FetchAllListingAction =
  | { type: 'FETCH_ALL_LISTING'; data: ListingData }
  | { type: 'FETCH_ALL_LISTING_SUCCESS'; message: string }
  | { type: 'FETCH_ALL_LISTING_FAILED'; error: string };



export function fetchListingData(data: ListingData): FetchAllListingAction {
  return {
    type: FETCH_ALL_LISTING,
    data
  };
}

export function fetchListingDataSuccess(message: string) {
  return {
    type: FETCH_ALL_LISTING_SUCCESS,
    message
  };
}

export function fetchListingFailed(error: string) {
  return {
    type: FETCH_ALL_LISTING_FAILED,
    error
  };
}
