const searchFlickr = function (term) {
  console.log( 'Searching Flickr for:', term );

  const flickrURL = 'https://api.flickr.com/services/rest/?jsoncallback=?';

  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: term,
    format: 'json'
  }).done(showImages);
}

const showImages = function (results) {
  console.log( results );
  const generateURL = function (photo) {
    return [
      'http://farm',
      photo.farm,
      '.static.flickr.com/',
      photo.server,
      '/',
      photo.id,
      '_',
      photo.secret,
      '_q.jpg' // Change "q" for different sizes
    ].join('');
  }

  _(results.photos.photo).each(function (photoInfo) {
    const photoURL = generateURL(photoInfo);
    const $img = $('<img/>', {src: photoURL});
    $img.appendTo('#images'); // $('#images').append($img);
  });
}


$(document).ready(function () {
  $('#search').on('submit', function (e) {
    e.preventDefault(); // Stay on this page, we'll do the AJAX request ourselves.
    const query = $('#query').val();
    searchFlickr( query );
  });

  $(window).on('scroll', function () {
    const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();

    if (scrollBottom > 600) {
      return; // Don't do anything until we are within 600 pixels of the bottom of the page.
    }

    console.log('nearing the bottom');
    // Your code here.

  });
})
