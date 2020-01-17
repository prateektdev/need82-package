import {
  fetchAllItemData as fetchAllItemDataAction,
  fetchItemCategories as fetchItemCategoriesAction,
  fetchItemCategoriesSuccess as fetchItemCategoriesSuccessAction,
  fetchAllItemDataSuccess as fetchAllItemDataSuccessAction
}
  from '../../../actions/item.actions';
import {
  fetchStoreCategories as fetchStoreCategoriesAction,
  fetchAllStoreData as fetchAllStoreDataAction,
  fetchAllStoreDataSuccess as fetchAllStoreDataSuccessAction,
} from '../../../actions/store.actions';

export interface BrowsePageState {
  items: Array<any>,
  stores: Array<any>,
  pagination: any,
  size: number,
  lastKey: string,
  selectedCategory: string,
  showItems: boolean
}

export interface stateProps {
  fetchAllItem: {
    message: string,
    error: string,
    isLoading: boolean,
    isFetchAllItemSuccess: boolean
  },
  fetchAllStore: {
    message: string,
    error: string,
    isFetchAllStoreSuccess: boolean,
    isLoading: boolean
  },
  fetchStoreCategories: {
    message: any,
    error: string,
    isLoading: boolean,
    isFetchCategoriesSuccess: boolean
  },
  fetchItemCategories: {
    message: any,
    error: string,
    isLoading: boolean,
    isFetchCategoriesSuccess: boolean
  }
}

export interface PropsFromDispatch {
  fetchAllItemData: typeof fetchAllItemDataAction,
  fetchItemCategories :typeof fetchItemCategoriesAction,
  fetchItemCategoriesSuccess: typeof fetchItemCategoriesSuccessAction,
  fetchAllStoreData: typeof fetchAllStoreDataAction,
  fetchAllStoreDataSuccess: typeof fetchAllStoreDataSuccessAction,
  fetchAllItemDataSuccess: typeof fetchAllItemDataSuccessAction,
  fetchStoreCategories: typeof fetchStoreCategoriesAction
}