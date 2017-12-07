'use strict';

var state = {
  page: 1,
  lastPage: false
};

var searchFlickr = function searchFlickr(term) {
  if (state.lastPage) {
    return;
  }

  console.warn('We are searching for this word: ' + term);

  var flickrURL = 'https://api.flickr.com/services/rest/?jsoncallback=?';

  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: term,
    format: 'json',
    page: state.page++
  }).done(showImages);
};

var showImages = function showImages(results) {
  console.log(results);

  if (results.photos.page >= results.photos.pages) {
    state.lastPage = true;
  }

  var generateURL = function generateURL(photo) {
    return ['http://farm', photo.farm, '.static.flickr.com/', photo.server, '/', photo.id, '_', photo.secret, '_q.jpg' // Change "q" for different sizes
    ].join('');
  };

  _(results.photos.photo).each(function (photoInfo) {
    var photoURL = generateURL(photoInfo);
    var $img = $('<img/>', { src: photoURL });
    $img.appendTo('#images'); // $('#images').append($img);
  });
};

$(document).ready(function () {
  $('#search').on('submit', function (e) {
    e.preventDefault(); // Stay on this page, we'll do the AJAX request ourselves.
    $('#images').empty();
    state.page = 1;
    state.lastPage = false;
    var query = $('#query').val();
    searchFlickr(query);
  });

  var throttledSearchFlickr = _.throttle(searchFlickr, 6000, { trailing: false });

  $(window).on('scroll', function () {
    var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();

    if (scrollBottom > 600) {
      return; // Don't do anything until we are within 600 pixels of the bottom of the page.
    }

    var query = $('#query').val();
    throttledSearchFlickr(query);
  });
});