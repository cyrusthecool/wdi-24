const fs = require('fs'); // The Node.js standard library for file system access

// fs.readFile('example.txt', 'utf-8', function (err, content) {
//   if (err) {
//     throw err;
//   }
//
//   console.log( content );
// });

// Wrap the callback based fs.readFile() function to use a Promise.
const readFile = function (filename) {

  return new Promise(function (resolve, reject) {
    // The promise callback has to call resolve() and reject()
    fs.readFile(filename, 'utf-8', function (err, content) {
      if (err) {
        reject(err); // This will run any .catch()
        return;
      }

      resolve(content); // This will run all your .then() callbacks.
    });
  });
};

const promise = readFile('example.txt');
promise.then(function (data) {
  console.log(data);
  return data; // You must return the original data if another handler will be attached.
});
promise.then(function (data) {
  console.log( data.toUpperCase() );
});

// Homework
// 1. Create a function called wait(n) which returns a promise that will run your .then
// after n milliseconds.

// setTimeout(..., 800);
// could now be wait(800).then(...);

// 2. Write a promise based wrapper around XMLHttpRequest
// retrieve(someURL).then(...);
