import 'whatwg-fetch';  //importing the polyfill so that it works in browsers that don't natively support it
import getBaseUrl from './baseUrl';       //importing baseUrl file to help know where to serve data from depending on mode

const baseUrl = getBaseUrl();

//only public function
export function getUsers() {
  return get('users');
}

//function to delete user
export function deleteUser(id) {
  return del(`users/${id}`);
}

function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError);
}

//can't call function delete as it is a keyword in js
function del(url) {
  const request = new Request(baseUrl + url, {
    method: 'DELETE'
  });

  return fetch(request).then(onSuccess,onError);
}

//one place to keep track of any calls in progress
function onSuccess(response) {
  return response.json();
}

//centralized error handling
function onError(error) {
  console.log(error); //eslint-disable-line no-console
}
