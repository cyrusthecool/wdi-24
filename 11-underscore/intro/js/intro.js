////////////////////////////////////////////////////////////////////////////////
// Collections - Easy iteration ////////////////////////////////////////////////

const bros = "Groucho Harpo Chico".split(' ');

_(bros).forEach(function (b) {
  console.log( b.toUpperCase() );
});

// bros.forEach(function (b) {
//   console.log( b.toUpperCase() );
// })

const groucho = {
  name: 'Groucho',
  instrument: 'guitar',
  vice: 'cigars'
};

_(groucho).forEach(function (value, key) {
  console.log( `${key} is ${value}` );
})

////////////////////////////////////////////////////////////////////////////////
// Collections - Map / Reduce

const squares = _([1, 2, 3, 4, 5]).map(function (n) {
  return n * n; // n squared
});

console.log( squares );

const sum = _([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).reduce(function (runningTotal, n) {
  return runningTotal + n;
});

console.log( sum );

////////////////////////////////////////////////////////////////////////////////
// Collections - Search through arrays of objects (inspired by ActiveRecord) ///
const brothers = [
  {name: 'Groucho', instrument: 'guitar', vice: 'cigars', age: 44},
  {name: 'Harpo', instrument: 'harp', vice: 'mutism', age: 42},
  {name: 'Chico', instrument: 'piano', vice: 'infidelity', age: 39}
];

const guitarist = _(brothers).findWhere({instrument: 'guitar'});
console.log( guitarist );

const over40s = _(brothers).filter(function (b) {
  return b.age > 40;
});
console.log( over40s );
