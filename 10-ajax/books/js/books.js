const form = document.getElementById('title-search');
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Don't really submit the form, stay on this page.

  const title = document.getElementById('query').value;

  // make an ajax request for that title
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) { return; }

    const info = JSON.parse( xhr.response );

    if (info.totalItems === 0) {
      alert('Title not found');
      return;
    }

    const cover = info.items[0].volumeInfo.imageLinks.thumbnail;
    const title = info.items[0].volumeInfo.title;

    const image = document.getElementById('cover');
    image.setAttribute('src', cover);
    image.setAttribute('title', title);
  }

  xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=title:' + title);
  xhr.send();
});
