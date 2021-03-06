/*
The Fortune Teller

Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that:

takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.*/

const tellFortune = function (numChildren, name, geoLocation, jobTitle) {
  const fortune = `You will be a ${ jobTitle } in ${ geoLocation }, and married to ${ name } with ${numChildren} kids.`;

  console.log(fortune);
};

tellFortune(3, 'Gary', 'Hawaii', 'psychiatrist');
tellFortune(0, 'Wendy', 'Canberra', 'lobbyist');
tellFortune(9, 'Brett', 'Sydney', 'vase maker');

/*
The Puppy Age Calculator

You know how old your dog is in human years, but what about dog years? Calculate it!

Write a function named calculateDogAge that:

takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
Call the function three times with different sets of values.
Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.
*/

const calculateDogAge = function (age, dogYearsPerHumanYear=7) {
  const dogAge = age * dogYearsPerHumanYear;
  const message = `Your doggie is ${ dogAge } years old in dog years!`;
  console.log(message);
};

calculateDogAge(1);
calculateDogAge(7);
calculateDogAge(21, 5);


/*
The Lifetime Supply Calculator

Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Write a function named calculateSupply that:

takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age).
outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.
Bonus: Accept floating point values for amount per day, and round the result to a round number.
*/

const calculateSupply = function (currentAge, amountPerDay) {
  const deathAge = 55;
  const amountPerYear = amountPerDay * 365.25;
  const yearsRemaining = deathAge - currentAge;

  const lifetimeSupply = amountPerYear * yearsRemaining;

  console.log(`You will need ${ Math.ceil(lifetimeSupply) } to last you until the ripe old age of ${ deathAge }`);
}

calculateSupply(47, 7.23);
calculateSupply(15, 3);
calculateSupply(55, 100);



/*
The Geometrizer

Create 2 functions that calculate properties of a circle.

Create a function called calcCircumfrence:

Pass the radius to the function.
Calculate the circumference based on the radius, and output "The circumference is NN".
Create a function called calcArea:

Pass the radius to the function.
Calculate the area based on the radius, and output "The area is NN".
*/

const calcCircumference = function (radius) {
  const circumference = 2 * Math.PI * radius;
  console.log(`The circumference is ${ circumference }`);
};

calcCircumference(4);

const calcArea = function (radius) {
  const area = Math.PI * radius * radius; // pi r^2
  console.log(`The area is ${ area }`);
}

calcArea(4);

/*
The Temperature Converter

It's hot out! Let's make a converter based on the steps here.

Create a function called celsiusToFahrenheit:

Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".
Create a function called fahrenheitToCelsius:
Now store a fahrenheit temperature into a variable.

Convert it to celsius and output "NN°F is NN°C."*/

const celsiusToFahrenheit = function (celsius) {
  const fahrenheit = celsius * 1.8 + 32;
  console.log(`${ celsius }°C is ${ fahrenheit }°F`);
  return fahrenheit;
};

celsiusToFahrenheit(22);

const fahrenheitToCelsius = function (fahrenheit) {
  const celsius = (fahrenheit - 32) / 1.8; // Parens are to overcome the order of operations.
  console.log(`${fahrenheit}°F is ${celsius}°C.`);
  return celsius;
};

fahrenheitToCelsius(71.6);
