//The file isn't Transpiled, so must use CommonJs and ES5

//Register Babel to transpile before our tests : babel should transpile our tests before mocha runs any tests
require('babel-register')();

//Disable webpack features that Mocha doesn't understand  :  if it sees the css extension in js file to treat it like an empty function
require.extensions['.css'] = function () {};
