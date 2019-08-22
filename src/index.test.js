import {expect} from 'chai';      //Use the expect style that comes with chai
import jsdom from 'jsdom';        //importing jsdom
import fs from 'fs';              //import filesystem

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should say hello', (done) => {                                      //confirm that the markup is there
    const index = fs.readFileSync('./src/index.html', "utf-8");       //get ref to index.html file, contents of our html file held in mem by const index
    jsdom.env(index, function(err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Hello World");
      done();
      window.close();                                          //close window to save up mem
    });                                                       //now use jsdom, defining the jsdom environment, passing in index.html
  });
});
//The first paremeter is a .html file, second can be the js file, if any of the js files uses fetch, use isomorphic fetch since fetch is a browser feature unavailable in node.
//Then a callback func that runs after jsdom has completed pulling index.html into mem, making a virtual dom in mem
//window refers to our browser window


//When doing an asynchronous test, one that involves a callback func, include done parameter so mocha knows its safe to eval if expect is true or false
