export const setTOLocalStorage = (key: any, value: any) => localStorage.setItem(key, value);
export const getLocalStorage = (key: any):any => localStorage.getItem(key);
export const getTokenFromLocalStorage = (key: string): any => {
  const userKey = getLocalStorage(key);
  return getLocalStorage(userKey);
};