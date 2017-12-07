const state = {
  page: 1,
  lastPage: false
};

const searchFlickr = function (term) {
  if (state.lastPage) { return; }

  console.warn( `We are searching for this word: ${ term }`);

  const flickrURL = 'https://api.flickr.com/services/rest/?jsoncallback=?';

  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: term,
    format: 'json',
    page: state.page++
  }).done(showImages);
}

const showImages = function (results) {
  console.log( results );

  if (results.photos.page >= results.photos.pages) {
    state.lastPage = true;
  }

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
    $('#images').empty();
    state.page = 1;
    state.lastPage = false;
    const query = $('#query').val();
    searchFlickr( query );
  });

  const throttledSearchFlickr = _.throttle( searchFlickr, 6000, {trailing: false});

  $(window).on('scroll', function () {
    const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();

    if (scrollBottom > 600) {
      return; // Don't do anything until we are within 600 pixels of the bottom of the page.
    }

    const query = $('#query').val();
    throttledSearchFlickr(query);

  });
})
