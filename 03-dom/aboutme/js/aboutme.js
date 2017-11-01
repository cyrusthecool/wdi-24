// (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
document.body.style.fontFamily = "Arial, sans serif";

// (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
const nickname = document.getElementById('nickname');
nickname.innerHTML = 'The Blade';

const favorites = document.getElementById('favorites');
favorites.innerHTML = 'butterfly one, butterfly two, some cat';

// Alternative without using a variable:
document.getElementById('hometown').innerHTML = 'Sydney';

// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
const list = document.getElementsByTagName('li');

for (let i = 0; i < list.length; i++) {
  list[ i ].className = 'listitem'; // .class is a reserved word
}

// Create a new img element and set its src attribute to a picture of you. Append that element to the page.

const bill = document.createElement('img'); // Detached DOM node
bill.src = 'http://fillmurray.com/800/1000';
document.body.appendChild( bill );
