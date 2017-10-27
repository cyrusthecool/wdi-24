

// Global scope ////////////////////////////////////////////////////////////////
var message = "Hello world";

const showMessage = function () {
  console.log(message);
}

showMessage();

// Local or function scope /////////////////////////////////////////////////////
const showLocalMessage = function () {
  var localMessage = 'Goodbye world';
  console.log( localMessage );
}

showLocalMessage();
// console.log( localMessage ); // localMessage has gone out of scope

// A var within a block ////////////////////////////////////////////////////////
if (23 === 23) {
  var food = 'hotdogs'; // Defines a global variable
}

console.log( food );

// A let within a block ////////////////////////////////////////////////////////
if (42 === 42) {
  let song = 'Song of Joy'; // This has block scope
}

// console.log( song ); // song has gone out of scope

// loop with var ///////////////////////////////////////////////////////////////
const msg = "Thanks for all the fish";
for (let i = 0; i < msg.length; i++) {
  console.log( msg[i] );
}

// const inside a block ////////////////////////////////////////////////////////
// A const has block (the same as let)
if (1001 === 1001) {
  const password = 'swordfish'; // Only exists with the block.
}
