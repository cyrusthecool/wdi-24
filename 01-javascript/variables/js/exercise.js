/*
The Fortune Teller

Why pay a fortune teller when you can just program your fortune yourself?

Store the following into variables: number of children, partner's name, geographic location, job title.
Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
*/

const numChildren = 3;
const name = 'Gary';
const geoLocation = 'Hawaii';
const jobTitle = 'psychiatrist';

// const fortune = 'You will be a ' + jobTitle + ' in ' + geoLocation + ', and married to ' + name + ' with ' + numChildren + ' kids.';

// ES6 Interpolation: Only works with `backtick strings`.
const fortune = `You will be a ${ jobTitle } in ${ geoLocation }, and married to ${ name } with ${numChildren} kids.`;

console.log(fortune);

/*
The Age Calculator

Forgot how old someone is? Calculate it!

Store the current year in a variable.
Store their birth year in a variable.
Calculate their 2 possible ages based on the stored values.
Output them to the screen like so: "They are either NN or NN", substituting the values.
*/

const currentYear = 2017;
const birthYear = 1984;

const possibleAge1 = currentYear - birthYear;
const possibleAge2 = possibleAge1 - 1;

const message = `They are either ${ possibleAge2 } or ${ possibleAge1 }`;
console.log( message );

/*
The Lifetime Supply Calculator

Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Store your current age into a variable.
Store a maximum age into a variable.
Store an estimated amount per day (as a number).
Calculate how many you would eat total for the rest of your life.
Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
*/

const currentAge = 47;
const deathAge = 55;
const amountPerDay = 7; // Hotdogs

const amountPerYear = amountPerDay * 365.25;
const yearsRemaining = deathAge - currentAge;

const lifetimeSupply = amountPerYear * yearsRemaining;

console.log(`You will need ${ lifetimeSupply } to last you until the ripe old age of ${ deathAge }`);


/*
The Geometrizer

Calculate properties of a circle, using the definitions here.

Store a radius into a variable.
Calculate the circumference based on the radius, and output "The circumference is NN".
Calculate the area based on the radius, and output "The area is NN".
*/

const radius = 42;
const circumference = 2 * Math.PI * radius;

console.log(`The circumference is ${ circumference }`);

const area = Math.PI * radius * radius; // pi r^2
console.log(`The area is ${ area }`);

/*
The Temperature Converter

It's hot out! Let's make a converter based on the steps here.

Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".
Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "NN°F is NN°C."
*/

const celsius = 22;
const fahrenheit = celsius * 1.8 + 32;

console.log(`${ celsius }°C is ${ fahrenheit }°F`);

const otherFahrenheit = 71.6;
const otherCelsius = (otherFahrenheit - 32) / 1.8; // Parens are to overcome the order of operations.

console.log(`${otherFahrenheit}°F is ${otherCelsius}°C.`);
