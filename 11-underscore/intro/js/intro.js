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


////////////////////////////////////////////////////////////////////////////////
// Collections - Sorting and grouping (good for statistics) ////////////////////
const ageOrderedBrothers = _(brothers).sortBy('age');
console.log( ageOrderedBrothers );

const scores = [1.2, 1.9, 2.4, 2.7, 1.1, 4.3];
const groupedScores = _(scores).groupBy(function (n) {
  return Math.floor( n );
});
console.log( groupedScores );

////////////////////////////////////////////////////////////////////////////////
// Collections - Predicate methods
const data = [1, 2, 3, 4, 5];
const allEven = _(data).every(function (n) {
  return n % 2 === 0; // Is n even?
});
console.log( allEven );

const someEven = _(data).some(function (n) {
  return n % 2 === 0; // Is n even?
});
console.log( someEven );

////////////////////////////////////////////////////////////////////////////////
// Arrays: Find specific data
console.log( _(data).contains(3) ); // No more -1
console.log( _(brothers).pluck( 'vice' ) );

console.log( _(brothers).max('age') );
console.log( _(brothers).min('age') );

////////////////////////////////////////////////////////////////////////////////
// Arrays - Selecting random elements
console.log( _(data).shuffle() );
console.log( _(data).sample() );
console.log( _(data).sample(2) );
