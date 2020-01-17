export const FETCH_PACKAGE = 'FETCH_PACKAGE';
export const FETCH_PACKAGE_SUCCESS = 'FETCH_PACKAGE_SUCCESS';
export const FETCH_PACKAGE_FAILED = 'FETCH_PACKAGE_FAILED';

export const FETCH_PACKAGE_DETAILS = 'FETCH_PACKAGE_DETAILS';
export const FETCH_PACKAGE_DETAILS_SUCCESS = 'FETCH_PACKAGE_DETAILS_SUCCESS';
export const FETCH_PACKAGE_DETAILS_FAILED = 'FETCH_PACKAGE_DETAILS_FAILED';

export const FETCH_CURRENT_PACKAGE = 'FETCH_CURRENT_PACKAGE';
export const FETCH_CURRENT_PACKAGE_SUCCESS = 'FETCH_CURRENT_PACKAGE_SUCCESS';
export const FETCH_CURRENT_PACKAGE_FAILED = 'FETCH_CURRENT_PACKAGE_FAILED';

export const FETCH_ALL_PACKAGE = 'FETCH_ALL_PACKAGE';
export const FETCH_ALL_PACKAGE_SUCCESS = 'FETCH_ALL_PACKAGE_SUCCESS';
export const FETCH_ALL_PACKAGE_FAILED = 'FETCH_ALL_PACKAGE_FAILED';

export const ADD_PACKAGE = 'ADD_PACKAGE';
export const ADD_PACKAGE_SUCCESS = 'ADD_PACKAGE_SUCCESS';
export const ADD_PACKAGE_FAILED = 'ADD_PACKAGE_FAILED';

export interface PackageData {
  package_id: string,
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

export type FetchPackageAction =
  | { type: 'FETCH_PACKAGE'; data: PackageData }
  | { type: 'FETCH_PACKAGE_SUCCESS'; message: string }
  | { type: 'FETCH_PACKAGE_FAILED'; error: string };

export type FetchPackageDetailsAction =
  | { type: 'FETCH_PACKAGE_DETAILS'; data: PackageData }
  | { type: 'FETCH_PACKAGE_DETAILS_SUCCESS'; message: string }
  | { type: 'FETCH_PACKAGE_DETAILS_FAILED'; error: string };

export type FetchAllPackageAction =
  | { type: 'FETCH_ALL_PACKAGE'; data: PackageData }
  | { type: 'FETCH_ALL_PACKAGE_SUCCESS'; message: string }
  | { type: 'FETCH_ALL_PACKAGE_FAILED'; error: string };

export type AddPackageAction =
  | { type: 'ADD_PACKAGE'; data: PackageData }
  | { type: 'ADD_PACKAGE_SUCCESS'; message: string }
  | { type: 'ADD_PACKAGE_FAILED'; error: string };

export type FetchCurrentPackageAction =
  | { type: 'FETCH_CURRENT_PACKAGE'; data: PackageData }
  | { type: 'FETCH_CURRENT_PACKAGE_SUCCESS'; message: string }
  | { type: 'FETCH_CURRENT_PACKAGE_FAILED'; error: string };



export function fetchPackageData(data: PackageData): FetchPackageAction {
  return {
    type: FETCH_PACKAGE,
    data
  };
}

export function fetchPackageDataSuccess(message: string) {

  return {
    type: FETCH_PACKAGE_SUCCESS,
    message
  };
}

export function fetchPackageDataFailed(error: string) {

  return {
    type: FETCH_PACKAGE_FAILED,
    error
  };
}

export function fetchPackageDetails(data: PackageData): FetchPackageDetailsAction {
  return {
    type: FETCH_PACKAGE_DETAILS,
    data
  };
}

export function fetchPackageDetailsSuccess(message: string) {

  return {
    type: FETCH_PACKAGE_DETAILS_SUCCESS,
    message
  };
}

export function fetchPackageDetailsFailed(error: string) {

  return {
    type: FETCH_PACKAGE_DETAILS_FAILED,
    error
  };
}

export function fetchAllPackageData(data: PackageData): FetchAllPackageAction {
  return {
    type: FETCH_ALL_PACKAGE,
    data
  };
}

export function fetchAllPackageDataSuccess(message: string) {

  return {
    type: FETCH_ALL_PACKAGE_SUCCESS,
    message
  };
}

export function fetchAllPackageDataFailed(error: string) {

  return {
    type: FETCH_ALL_PACKAGE_FAILED,
    error
  };
}

export function addPackage(data: PackageData): AddPackageAction {
  return {
    type: ADD_PACKAGE,
    data
  };
}

export function addPackageSuccess(message: string) {
  return {
    type: ADD_PACKAGE_SUCCESS,
    message
  };
}

export function addPackageFailed(error: string) {
  return {
    type: ADD_PACKAGE_FAILED,
    error
  };
}

export function fetchCurrentPackageData(data: PackageData): FetchCurrentPackageAction {
  return {
    type: FETCH_CURRENT_PACKAGE,
    data
  };
}

export function fetchCurrentPackageDataSuccess(message: string) {

  return {
    type: FETCH_CURRENT_PACKAGE_SUCCESS,
    message
  };
}

export function fetchCurrentPackageDataFailed(error: string) {

  return {
    type: FETCH_CURRENT_PACKAGE_FAILED,
    error
  };
}