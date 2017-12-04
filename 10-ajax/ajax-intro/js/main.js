setInterval(function () {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    document.body.innerHTML += xhr.response; // TODO: Make this better with actual HTML
  }
  xhr.open('GET', 'http://numbersapi.com/random/trivia');
  xhr.send(); // Asynchronous
}, 5000);
