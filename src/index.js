import './index.css';

// import numeral from 'numeral';

// /* eslint-disable no-console*/
// /* eslint-disable no-debugger*/

// const courseValue = numeral(1000).format('$0,0.00');
// debugger;
// console.log(`I would pay ${courseValue} for this awesome course!`);


import {getUsers, deleteUser} from '../src/api/userApi';  //importing our API
//import {link} from 'fs';

//populate Users via API call
//make class to getUsers and use the then func from the promise to handle result received from API
getUsers().then(result => {
  let userBody = '';

  result.forEach(user => {
    userBody += `<tr>
    <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
    <td>${user.id}</td>
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
    <td>${user.email}</td>
    </tr>`
  });

  global.document.getElementById('users').innerHTML = userBody;

  const deleteLinks = global.document.getElementsByClassName('deleteUser')

  //Must use array.from to create a real array from a DOM collection
  //getElementsByClassName only returns an 'array like' object
  Array.from(deleteLinks, link => {                           //iterate through all links
    link.onclick = function(event) {                          //add a click event
      const element = event.target;                           //prevent the default of a change to url
      event.preventDefault();
      deleteUser(element.attributes["data-id"].value);        //call deleteUser to remove a clicked row from the DOM
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    }
  });
});
