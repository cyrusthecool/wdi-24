const fetchFact = function () {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    console.log('readyState', xhr.readyState);
    // Ignore all the readyStates except 4 (i.e. completed/done)
    if (xhr.readyState !== 4) {
      return;
    }

    const info = JSON.parse( xhr.response ); // Convert the string object into a real object.

    const p = document.createElement('p');
    p.innerHTML = `<strong>${ info.number }</strong>: ${ info.text }`; // Template
    document.body.appendChild( p );
  }
  xhr.open('GET', 'http://numbersapi.com/random/trivia?json');
  xhr.send(); // Asynchronous

  console.log('fetchFact is done');
};

fetchFact();

const button = document.getElementsByTagName('button')[0];
button.addEventListener('click', fetchFact);
