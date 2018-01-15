const groucho = {
  name: 'Groucho Julius Marx',
  greeting: function () {
    return 'Good evening, my name is ' + this.name;
  }
};

const harpo = {
  name: 'Harpo Marx',
  greeting: function () {
    return 'Good evening, my name is ' + this.name;
  }
};

// .bind ///////////////////////////////////////////////////////////////////////
// .bind lets you permanantly associate a particular object as the `this` within
// that function.
const grouchoGreeter = groucho.greeting.bind(groucho);
grouchoGreeter();

// .apply //////////////////////////////////////////////////////////////////////
const numbers = [5, 2, 3 ,12, -1001, 18, 3.14, 100000];
// Math.max(numbers) doesn't work because .max expects separate arguments,
// not a single array.
console.log( Math.max.apply( null, numbers ) );

// ES6 spread operator
Math.max( ...numbers );
