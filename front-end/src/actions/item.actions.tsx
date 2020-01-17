export const FETCH_ITEM = 'FETCH_ITEM';
export const FETCH_ITEM_SUCCESS = 'FETCH_ITEM_SUCCESS';
export const FETCH_ITEM_FAILED = 'FETCH_ITEM_FAILED';

export const FETCH_ALL_ITEM = 'FETCH_ALL_ITEM';
export const FETCH_ALL_ITEM_SUCCESS = 'FETCH_ALL_ITEM_SUCCESS';
export const FETCH_ALL_ITEM_FAILED = 'FETCH_ALL_ITEM_FAILED';

export const FETCH_MOST_VIEWED_ITEM = 'FETCH_MOST_VIEWED_ITEM';
export const FETCH_MOST_VIEWED_ITEM_SUCCESS = 'FETCH_MOST_VIEWED_ITEM_SUCCESS';
export const FETCH_MOST_VIEWED_ITEM_FAILED = 'FETCH_MOST_VIEWED_ITEM_FAILED';

export const FETCH_CURRENT_ITEM = 'FETCH_CURRENT_ITEM';
export const FETCH_CURRENT_ITEM_SUCCESS = 'FETCH_CURRENT_ITEM_SUCCESS';
export const FETCH_CURRENT_ITEM_FAILED = 'FETCH_CURRENT_ITEM_FAILED';

export const FETCH_SOLD_ITEM = 'FETCH_SOLD_ITEM';
export const FETCH_SOLD_ITEM_SUCCESS = 'FETCH_SOLD_ITEM_SUCCESS';
export const FETCH_SOLD_ITEM_FAILED = 'FETCH_SOLD_ITEM_FAILED';

export const ADD_ITEM = 'ADD_ITEM';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAILED = 'ADD_ITEM_FAILED';

export const MINT_ITEM_IN_STORE = 'MINT_ITEM_IN_STORE';
export const MINT_ITEM_IN_STORE_SUCCESS = 'MINT_ITEM_IN_STORE_SUCCESS';
export const MINT_ITEM_IN_STORE_FAILED = 'MINT_ITEM_IN_STORE_FAILED';

export const MINT_FIRST_ITEM_IN_STORE = 'MINT_FIRST_ITEM_IN_STORE';
export const MINT_FIRST_ITEM_IN_STORE_SUCCESS = 'MINT_FIRST_ITEM_IN_STORE_SUCCESS';
export const MINT_FIRST_ITEM_IN_STORE_FAILED = 'MINT_FIRST_ITEM_IN_STORE_FAILED';

export const LIST_ITEM = 'LIST_ITEM';
export const LIST_ITEM_SUCCESS = 'LIST_ITEM_SUCCESS';
export const LIST_ITEM_FAILED = 'LIST_ITEM_FAILED';

export const LIST_ITEM_IN_STORE = 'LIST_ITEM_IN_STORE';
export const LIST_ITEM_IN_STORE_SUCCESS = 'LIST_ITEM_IN_STORE_SUCCESS';
export const LIST_ITEM_IN_STORE_FAILED = 'LIST_ITEM_IN_STORE_FAILED';

export const LIST_FIRST_ITEM_IN_STORE = 'LIST_FIRST_ITEM_IN_STORE';
export const LIST_FIRST_ITEM_IN_STORE_SUCCESS = 'LIST_FIRST_ITEM_IN_STORE_SUCCESS';
export const LIST_FIRST_ITEM_IN_STORE_FAILED = 'LIST_FIRST_ITEM_IN_STORE_FAILED';

export const FETCH_TOTAL_AMOUNT_LISTING = 'FETCH_TOTAL_AMOUNT_LISTING';
export const FETCH_TOTAL_AMOUNT_LISTING_SUCCESS = 'FETCH_TOTAL_AMOUNT_LISTING_SUCCESS';
export const FETCH_TOTAL_AMOUNT_LISTING_FAILED = 'FETCH_TOTAL_AMOUNT_LISTING_FAILED';

export const GET_ITEM_CATEGORIES = 'GET_ITEM_CATEGORIES';
export const GET_ITEM_CATEGORIES_SUCCESS = 'GET_ITEM_CATEGORIES_SUCCESS';
export const GET_ITEM_CATEGORIES_FAILED = 'GET_ITEM_CATEGORIES_FAILED';

export interface ItemData {
  item_id: string,
  image: string,
  title: string,
  itemscount: number,
  size: number,
  lastKey: string,
  category: string
}

export type FetchItemAction =
  | { type: 'FETCH_ITEM'; data: ItemData }
  | { type: 'FETCH_ITEM_SUCCESS'; message: string }
  | { type: 'FETCH_ITEM_FAILED'; error: string };

export type FetchAllItemAction =
  | { type: 'FETCH_ALL_ITEM'; data: ItemData }
  | { type: 'FETCH_ALL_ITEM_SUCCESS'; message: string }
  | { type: 'FETCH_ALL_ITEM_FAILED'; error: string };


export type FetchMostViewedItemAction =
| { type: 'FETCH_MOST_VIEWED_ITEM'; data: ItemData }
| { type: 'FETCH_MOST_VIEWED_ITEM_SUCCESS'; message: string }
| { type: 'FETCH_MOST_VIEWED_ITEM_FAILED'; error: string };


export type FetchCurrentItemAction =
  | { type: 'FETCH_CURRENT_ITEM'; data: ItemData }
  | { type: 'FETCH_CURRENT_ITEM_SUCCESS'; message: string }
  | { type: 'FETCH_CURRENT_ITEM_FAILED'; error: string };

export type FetchSoldItemAction =
  | { type: 'FETCH_SOLD_ITEM'; data: ItemData }
  | { type: 'FETCH_SOLD_ITEM_SUCCESS'; message: string }
  | { type: 'FETCH_SOLD_ITEM_FAILED'; error: string };

export type GetItemCategoriesAction =
  | { type: 'GET_ITEM_CATEGORIES'; }
  | { type: 'GET_ITEM_CATEGORIES_SUCCESS'; message: string }
  | { type: 'GET_ITEM_CATEGORIES_FAILED'; error: string };

export type AddItemAction =
  | { type: 'ADD_ITEM'; data: ItemData }
  | { type: 'ADD_ITEM_SUCCESS'; message: string }
  | { type: 'ADD_ITEM_FAILED'; error: string };

export type MintFirstItemInStoreAction =
  | { type: 'MINT_FIRST_ITEM_IN_STORE'; data: ItemData }
  | { type: 'MINT_FIRST_ITEM_IN_STORE_SUCCESS'; message: string }
  | { type: 'MINT_FIRST_ITEM_IN_STORE_FAILED'; error: string };

export type ListFirstItemInStoreAction =
  | { type: 'LIST_FIRST_ITEM_IN_STORE'; data: ItemData }
  | { type: 'LIST_FIRST_ITEM_IN_STORE_SUCCESS'; message: string }
  | { type: 'LIST_FIRST_ITEM_IN_STORE_FAILED'; error: string };

export type MintItemInStoreAction =
  | { type: 'MINT_ITEM_IN_STORE'; data: ItemData }
  | { type: 'MINT_ITEM_IN_STORE_SUCCESS'; message: string }
  | { type: 'MINT_ITEM_IN_STORE_FAILED'; error: string };

export type ListItemInStoreAction =
  | { type: 'LIST_ITEM_IN_STORE'; data: ItemData }
  | { type: 'LIST_ITEM_IN_STORE_SUCCESS'; message: string }
  | { type: 'LIST_ITEM_IN_STORE_FAILED'; error: string };

export type ListItemAction =
  | { type: 'LIST_ITEM'; data: ItemData }
  | { type: 'LIST_ITEM_SUCCESS'; message: string }
  | { type: 'LIST_ITEM_FAILED'; error: string };

export type fetchTotalEarningListing =
  | { type: 'FETCH_TOTAL_AMOUNT_LISTING'; data: ItemData }
  | { type: 'FETCH_TOTAL_AMOUNT_LISTING_SUCCESS'; message: string }
  | { type: 'FETCH_TOTAL_AMOUNT_LISTING_FAILED'; error: string };


export function fetchItemCategories() {
  return {
    type: GET_ITEM_CATEGORIES
  };
}

export function fetchItemCategoriesSuccess(message: string) {

  return {
    type: GET_ITEM_CATEGORIES_SUCCESS,
    message
  };
}

export function fetchItemCategoriesFailed(error: string) {

  return {
    type: GET_ITEM_CATEGORIES_FAILED,
    error
  };
}

export function fetchItemData(data: ItemData): FetchItemAction {
  return {
    type: FETCH_ITEM,
    data
  };
}

export function fetchItemDataSuccess(message: string) {

  return {
    type: FETCH_ITEM_SUCCESS,
    message
  };
}

export function fetchItemDataFailed(error: string) {

  return {
    type: FETCH_ITEM_FAILED,
    error
  };
}

export function fetchAllItemData(data: ItemData): FetchAllItemAction {
  return {
    type: FETCH_ALL_ITEM,
    data
  };
}

export function fetchAllItemDataSuccess(message: string) {

  return {
    type: FETCH_ALL_ITEM_SUCCESS,
    message
  };
}

export function fetchAllItemDataFailed(error: string) {

  return {
    type: FETCH_ALL_ITEM_FAILED,
    error
  };
}

export function fetchMostViewedItemData(data: ItemData): FetchMostViewedItemAction {
  return {
    type: FETCH_MOST_VIEWED_ITEM,
    data
  };
}

export function fetchMostViewedItemDataSuccess(message: string) {

  return {
    type: FETCH_MOST_VIEWED_ITEM_SUCCESS,
    message
  };
}

export function fetchMostViewedItemDataFailed(error: string) {

  return {
    type: FETCH_MOST_VIEWED_ITEM_FAILED,
    error
  };
}

export function fetchCurrentItemData(data: ItemData): FetchCurrentItemAction {
  return {
    type: FETCH_CURRENT_ITEM,
    data
  };
}

export function fetchCurrentItemDataSuccess(message: string) {

  return {
    type: FETCH_CURRENT_ITEM_SUCCESS,
    message
  };
}

export function fetchCurrentItemDataFailed(error: string) {

  return {
    type: FETCH_CURRENT_ITEM_FAILED,
    error
  };
}

export function fetchSoldItemData(data: ItemData): FetchSoldItemAction {
  return {
    type: FETCH_SOLD_ITEM,
    data
  };
}

export function fetchSoldItemDataSuccess(message: string) {

  return {
    type: FETCH_SOLD_ITEM_SUCCESS,
    message
  };
}

export function fetchSoldItemDataFailed(error: string) {

  return {
    type: FETCH_SOLD_ITEM_FAILED,
    error
  };
}

export function addItemData(data: ItemData): AddItemAction {
  return {
    type: ADD_ITEM,
    data
  };
}

export function addItemDataSuccess(message: string) {

  return {
    type: ADD_ITEM_SUCCESS,
    message
  };
}

export function addItemDataFailed(error: string) {

  return {
    type: ADD_ITEM_FAILED,
    error
  };
}

export function mintFirstItemInStoreData(data: ItemData): MintFirstItemInStoreAction {
  return {
    type: MINT_FIRST_ITEM_IN_STORE,
    data
  };
}

export function mintFirstItemInStoreDataSuccess(message: string) {

  return {
    type: MINT_FIRST_ITEM_IN_STORE_SUCCESS,
    message
  };
}

export function mintFirstItemInStoreDataFailed(error: string) {

  return {
    type: MINT_FIRST_ITEM_IN_STORE_FAILED,
    error
  };
}

export function mintItemInStoreData(data: ItemData): MintItemInStoreAction {
  return {
    type: MINT_ITEM_IN_STORE,
    data
  };
}

export function mintItemInStoreDataSuccess(message: string) {

  return {
    type: MINT_ITEM_IN_STORE_SUCCESS,
    message
  };
}

export function mintItemInStoreDataFailed(error: string) {

  return {
    type: MINT_ITEM_IN_STORE_FAILED,
    error
  };
}

export function listFirstItemInStoreData(data: ItemData): ListFirstItemInStoreAction {
  return {
    type: LIST_FIRST_ITEM_IN_STORE,
    data
  };
}

export function listFirstItemInStoreDataSuccess(message: string) {

  return {
    type: LIST_FIRST_ITEM_IN_STORE_SUCCESS,
    message
  };
}

export function listFirstItemInStoreDataFailed(error: string) {

  return {
    type: LIST_FIRST_ITEM_IN_STORE_FAILED,
    error
  };
}

export function listItemInStoreData(data: ItemData): ListItemInStoreAction {
  return {
    type: LIST_ITEM_IN_STORE,
    data
  };
}

export function listItemInStoreDataSuccess(message: string) {

  return {
    type: LIST_ITEM_IN_STORE_SUCCESS,
    message
  };
}

export function listItemInStoreDataFailed(error: string) {

  return {
    type: LIST_ITEM_IN_STORE_FAILED,
    error
  };
}

export function listItemData(data: ItemData): ListItemAction {
  return {
    type: LIST_ITEM,
    data
  };
}

export function listItemDataSuccess(message: string) {

  return {
    type: LIST_ITEM_SUCCESS,
    message
  };
}

export function listItemDataFailed(error: string) {

  return {
    type: LIST_ITEM_FAILED,
    error
  };
}

export function fetchTotalEarningListingData(data: ItemData): fetchTotalEarningListing {
  return {
    type: FETCH_TOTAL_AMOUNT_LISTING,
    data
  };
}

export function fetchTotalEarningListingDataSuccess(message: string) {

  return {
    type: FETCH_TOTAL_AMOUNT_LISTING_SUCCESS,
    message
  };
}

export function fetchTotalEarningListingDataFailed(error: string) {

  return {
    type: FETCH_TOTAL_AMOUNT_LISTING_FAILED,
    error
  };
}

