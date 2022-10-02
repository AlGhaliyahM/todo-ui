export const APISettings = {
  //token: '',
  credentials: 'include',
  headers: new Headers({
    Accept: 'application/json',
    "Content-Type": "application/json"
    //Authorization: 'Bearer ' + '', //add token here till i know how to access it from the cookie,
  }),
  baseURL: 'http://localhost:3000',
};
