/*This script generates mock data for local environment.
This way you don't actually have to point to an API,
but you enjoy realistic but randomized data,
and rapid page loads due to local,static data.
*/

/*eslint-disable no-console*/

import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs';                            //using filesystem which comes with node
import chalk from 'chalk';

const json = JSON.stringify(jsf(schema));           //calling stringify on results of jsf(jsf looks at schema we passed to it to gen random data).

//use node's built in fs to wrte our db file
fs.writeFile('./src/api/db.json', json, function(err) {
  if(err) {
    return console.log(chalk.red(err));
  } else {
    console.log(chalk.green("Mock data generated"));
  }
});
