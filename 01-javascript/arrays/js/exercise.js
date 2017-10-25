// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

const faves = [
  'Groucho',
  'Harpo',
  'Chico',
  'Margaret Dumont',
  'Zeppo',
  'Gummo'
];

for (let i = 0; i < faves.length; i++) {
  console.log( `My #${ 1 + i } choice is ${ faves[ i ] }` );
}
