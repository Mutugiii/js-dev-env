import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console*/

const port = 3000;
const app = express();

app.use(compression());               //adding gzip
app.use(express.static('dist'));      //telling express to serve static files as we are no longer using webpack

app.get('/',function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

//We will be hitting heroku for this data for our production build
// app.get('/users', function(req,res) {
//   //Hard coding for simplicity, pretend it is a real database
//   res.json([
//     {"id": 1,"firstName":"Bob","lastName":"Smith","email":"bob@gmail.com"},
//     {"id": 2,"firstName":"Tammy","lastName":"Norton","email":"tnorton@yahoo.com"},
//     {"id": 3,"firstName":"Tina","lastName":"Lee","email":"lee.tina@hotmail.com"}
//   ]);
// });

app.listen(port, function(err) {
  if(err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
