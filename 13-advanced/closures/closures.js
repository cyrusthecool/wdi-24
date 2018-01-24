const idMaker = function () {
  let id = 0; // This variable will still exist through the closure.
  return function () {
    return id++; // id is still accessible from the enclosing or outer function.
  }
};

const bikeID = idMaker();
const carID = idMaker();

const bikeFactory = function () {
  return {
    type: 'bike',
    id: bikeID()
  };
};

const carFactory = function () {
  return {
    type: 'car',
    id: carID()
  };
};

// Cars will have unique IDs and I can't accidentally break them.
let car1 = carFactory();
let car2 = carFactory();
let car3 = carFactory();

// Bikes will have unique IDs and I can't accidentally break them.
let bike1 = bikeFactory();
let bike2 = bikeFactory();

////////////////////////////////////////////////////////////////////////////////
// const h1 = function (content) {
//   return '<h1>' + content + '</h1>';
// }
//
// const p = function (content) {
//   return '<p>' + content + '</p>';
// }

// Closures are one of the few really nice bits of Javascript
const tag = function (tagName) {
  // const privateTag = tagName;
  return function (content) {
    return '<' + tagName + '>' + content + '</' + tagName + '>';
  }
}

const h1 = tag('h1');
const p = tag('p');

h1('Some title here'); // => <h1>Some title here</h1>
p('Lorem ipsum'); // => <p>Lorem ipsum</p>
