export const FETCH_STORE = 'FETCH_STORE';
export const FETCH_STORE_SUCCESS = 'FETCH_STORE_SUCCESS';
export const FETCH_STORE_FAILED = 'FETCH_STORE_FAILED';

export const FETCH_STORE_DETAILS = 'FETCH_STORE_DETAILS';
export const FETCH_STORE_DETAILS_SUCCESS = 'FETCH_STORE_DETAILS_SUCCESS';
export const FETCH_STORE_DETAILS_FAILED = 'FETCH_STORE_DETAILS_FAILED';

export const FETCH_CURRENT_STORE = 'FETCH_CURRENT_STORE';
export const FETCH_CURRENT_STORE_SUCCESS = 'FETCH_CURRENT_STORE_SUCCESS';
export const FETCH_CURRENT_STORE_FAILED = 'FETCH_CURRENT_STORE_FAILED';

export const FETCH_ALL_STORE = 'FETCH_ALL_STORE';
export const FETCH_ALL_STORE_SUCCESS = 'FETCH_ALL_STORE_SUCCESS';
export const FETCH_ALL_STORE_FAILED = 'FETCH_ALL_STORE_FAILED';

export const FETCH_USER_STORE = 'FETCH_USER_STORE';
export const FETCH_USER_STORE_SUCCESS = 'FETCH_USER_STORE_SUCCESS';
export const FETCH_USER_STORE_FAILED = 'FETCH_USER_STORE_FAILED';

export const ADD_STORE = 'ADD_STORE';
export const ADD_STORE_SUCCESS = 'ADD_STORE_SUCCESS';
export const ADD_STORE_FAILED = 'ADD_STORE_FAILED';

export const GET_STORE_CATEGORIES = 'GET_STORE_CATEGORIES';
export const GET_STORE_CATEGORIES_SUCCESS = 'GET_STORE_CATEGORIES_SUCCESS';
export const GET_STORE_CATEGORIES_FAILED = 'GET_STORE_CATEGORIES_FAILED';

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

export type FetchStoreAction =
  | { type: 'FETCH_STORE'; data: StoreData }
  | { type: 'FETCH_STORE_SUCCESS'; message: string }
  | { type: 'FETCH_STORE_FAILED'; error: string };

export type FetchStoreDetailsAction =
  | { type: 'FETCH_STORE_DETAILS'; data: StoreData }
  | { type: 'FETCH_STORE_DETAILS_SUCCESS'; message: string }
  | { type: 'FETCH_STORE_DETAILS_FAILED'; error: string };

export type FetchAllStoreAction =
  | { type: 'FETCH_ALL_STORE'; data: StoreData }
  | { type: 'FETCH_ALL_STORE_SUCCESS'; message: string }
  | { type: 'FETCH_ALL_STORE_FAILED'; error: string };

export type AddStoreAction =
  | { type: 'ADD_STORE'; data: StoreData }
  | { type: 'ADD_STORE_SUCCESS'; message: string }
  | { type: 'ADD_STORE_FAILED'; error: string };

export type GetStoreCategoriesAction =
  | { type: 'GET_STORE_CATEGORIES'; }
  | { type: 'GET_STORE_CATEGORIES_SUCCESS'; message: string }
  | { type: 'GET_STORE_CATEGORIES_FAILED'; error: string };

export type FetchCurrentStoreAction =
  | { type: 'FETCH_CURRENT_STORE'; data: StoreData }
  | { type: 'FETCH_CURRENT_STORE_SUCCESS'; message: string }
  | { type: 'FETCH_CURRENT_STORE_FAILED'; error: string };


export type FetchUserStoreAction =
  | { type: 'FETCH_USER_STORE'; data: StoreData }
  | { type: 'FETCH_USER_STORE_SUCCESS'; message: string }
  | { type: 'FETCH_USER_STORE_FAILED'; error: string };

export function fetchStoreCategories() {
  return {
    type: GET_STORE_CATEGORIES
  };
}

export function fetchStoreCategoriesSuccess(message: string) {

  return {
    type: GET_STORE_CATEGORIES_SUCCESS,
    message
  };
}

export function fetchStoreCategoriesFailed(error: string) {

  return {
    type: GET_STORE_CATEGORIES_FAILED,
    error
  };
}

export function fetchStoreData(data: StoreData): FetchStoreAction {
  return {
    type: FETCH_STORE,
    data
  };
}

export function fetchStoreDataSuccess(message: string) {

  return {
    type: FETCH_STORE_SUCCESS,
    message
  };
}

export function fetchStoreDataFailed(error: string) {

  return {
    type: FETCH_STORE_FAILED,
    error
  };
}

export function fetchStoreDetails(data: StoreData): FetchStoreDetailsAction {
  return {
    type: FETCH_STORE_DETAILS,
    data
  };
}

export function fetchStoreDetailsSuccess(message: string) {

  return {
    type: FETCH_STORE_DETAILS_SUCCESS,
    message
  };
}

export function fetchStoreDetailsFailed(error: string) {

  return {
    type: FETCH_STORE_DETAILS_FAILED,
    error
  };
}

export function fetchAllStoreData(data: StoreData): FetchAllStoreAction {
  return {
    type: FETCH_ALL_STORE,
    data
  };
}

export function fetchAllStoreDataSuccess(message: string) {

  return {
    type: FETCH_ALL_STORE_SUCCESS,
    message
  };
}

export function fetchAllStoreDataFailed(error: string) {

  return {
    type: FETCH_ALL_STORE_FAILED,
    error
  };
}

export function addStore(data: StoreData): AddStoreAction {
  return {
    type: ADD_STORE,
    data
  };
}

export function addStoreSuccess(message: string) {
  return {
    type: ADD_STORE_SUCCESS,
    message
  };
}

export function addStoreFailed(error: string) {
  return {
    type: ADD_STORE_FAILED,
    error
  };
}

export function fetchCurrentStoreData(data: StoreData): FetchCurrentStoreAction {
  return {
    type: FETCH_CURRENT_STORE,
    data
  };
}

export function fetchCurrentStoreDataSuccess(message: string) {

  return {
    type: FETCH_CURRENT_STORE_SUCCESS,
    message
  };
}

export function fetchCurrentStoreDataFailed(error: string) {

  return {
    type: FETCH_CURRENT_STORE_FAILED,
    error
  };
}

export function fetchUserStoreData(data: StoreData): FetchUserStoreAction {
  return {
    type: FETCH_USER_STORE,
    data
  };
}

export function fetchUserStoreDataSuccess(message: string) {

  return {
    type: FETCH_USER_STORE_SUCCESS,
    message
  };
}

export function fetchUserStoreDataFailed(error: string) {

  return {
    type: FETCH_USER_STORE_FAILED,
    error
  };
}