const fetchBook = function (e) {
  e.preventDefault(); // Don't leave this page.

  const title = $('#query').val();
  // $.ajax / $.get
  $.getJSON(`https://www.googleapis.com/books/v1/volumes?q=title:${ title }`).done(function (info) {
    const cover = info.items[0].volumeInfo.imageLinks.thumbnail;
    const $image = $('#cover');
    $image.attr('src', cover);
  }).done(function (info) {
    const title = info.items[0].volumeInfo.title;
    const $image = $('#cover');
    $image.attr('title', title);
  }).fail(function () {
    alert('Something bad happened');
  });
};

$(document).ready(function () {
  $('#title-search').on('submit', fetchBook);
});
