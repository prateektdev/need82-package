import { getTokenFromLocalStorage, getLocalStorage } from "./localStorage";
import { AUTHENTICATION_TOKEN } from "../constants/constants";

export const postRequest = async (url: any, body: any) => {

  const res = await fetch(
    url,
    requestParams('POST', body)
  );

  if (res.status === 401) {
    localStorage.clear();
  }
  if (res.status >= 200 && res.status < 400) {
    return res.json();
  } else {
    const response = await res.json();
    throw Error(response.reason);
  }

};

export const postFileRequest = async (url: any, body: any, filetype: any) => {
  const token = getLocalStorage('TOKEN');
  const res = await fetch(
    url,
    { // Your POST endpoint
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: body // This is your file object
    }
  );
  if (res.status === 401) {
    localStorage.clear();
  }
  if (res.status >= 200 && res.status < 400) {
    console.log('res : ', res); 
    return res.json();
  } else {
    const response = await res.json();
    throw Error(response.reason);
  }

};

export const putRequest = async (url: any, body: any) => {

  const res = await fetch(
    url,
    requestParams('PUT', body)
  );

  if (res.status === 401) {
    localStorage.clear();
  }
  if (res.status >= 200 && res.status < 400) {
    return res;
  } else {
    const response = await res.json();
    throw Error(response.reason);
  }

};

export const getRequest = async (url: any) => {

  const res = await fetch(
    url,
    requestParams('GET', null)
  );
  if (res.status === 401) {
    localStorage.clear();
  }
  if (res.status >= 200 && res.status < 400) {
    return res.json();
  } else {
    const response = await res.json();
    throw Error(response.reason);
  }

};

export const requestParams = (method: any, body: any) => {
  const token = getLocalStorage('TOKEN');
  let params = {
    method: method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };
  if (token) {
    params.headers['Authorization'] = `Bearer ${token}`;
  }
  if (body) {
    params['body'] = JSON.stringify(body);
  }
  params['mode'] = 'cors';
  return params;
};

export const requestFileParams = (method: any, body: any, filetype: any) => {
  const token = getLocalStorage('TOKEN');
  let params = {
    method: method,
    headers: {
      'Content-Type': 'multipart/form-data;boundary=gc0p4Jq0M2Yt08jU534c0p'
    }
  };
  if (body) {
    params['body'] = body;
  }
  if (token) {
    params.headers['Authorization'] = `Bearer ${token}`;
  }
  return params;
};



