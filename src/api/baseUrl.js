export default function getBaseUrl() {
  const inDevelopment = window.location.hostname === 'localhost';     //file will look at hostname to determine if app is running in dev
  return inDevelopment ? 'http://localhost:3001/' : '/';              //if in dev points at mockapi hosted at port 3001 & if production uses the server set up in srcServer
}
