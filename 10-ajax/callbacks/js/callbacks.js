////////////////////////////////////////////////////////////////////////////////
// Document ready callback
console.log('A: before the DOM ready');
$(document).ready(function () {
  console.log('B: the document is ready');
});
console.log('C: after the DOM ready');

// Callbacks can be asynchronous: A => C => B


////////////////////////////////////////////////////////////////////////////////
// Timers
const showMessage = function () {
  console.log('hello this is a message');
}

setTimeout(showMessage, 7000);

setInterval(function () {
  console.log('Some time has passed...');
}, 3000);


////////////////////////////////////////////////////////////////////////////////
// Event handlers
$(document).ready(function () {
  $('button').on('click', function () {
    alert('You are now leaving this page');
    window.location = 'http://yahoo.com';
  });
});


////////////////////////////////////////////////////////////////////////////////
// Custom function that uses a callback but it is more useful than runNicely
const bros = ['Groucho', 'Harpo', 'Chico', 'Gummo'];
// for (let i = 0; i < bros.length; i++) {
//   console.log( bros[i] );
// }
// const each = function (array, cb) {
//   for (let i = 0; i < array.length; i++) {
//     cb( array[i] );
//   }
// }
// each( bros, function (b) { console.log('Here is a brother', b)} );
// each( [1, 25, 18, 11], console.log );

[1, 25, 18, 11].forEach( function (n) { console.log( n ) } );



////////////////////////////////////////////////////////////////////////////////
// You can write your own function which receives and executes a callback
const runNicely = function (cb) {
  console.log('Hello, I am about to run your function for you, I hope that is okay');
  cb();
  console.log('I really hope that went well. Thank you.');
}

const hello = function () {
  console.log('hello world');
}

const goodbye = function () {
  console.log('goodbye world');
}

// runNicely( hello );
// runNicely( goodbye );
