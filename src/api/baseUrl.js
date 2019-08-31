export default function getBaseUrl() {
  //const inDevelopment = window.location.hostname === 'localhost';     //file will look at hostname to determine if app is running in dev
  //return inDevelopment ? 'http://localhost:3001/' : '/';              //if in dev points at mockapi hosted at port 3001 & if production uses the server set up in srcServer
  return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : '/';    //same logc as above
}

function getQueryStringParameterByName(name, url) {
  if(!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if(!results) return null;
  if(!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ""));
}
