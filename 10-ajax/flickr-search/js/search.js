const searchFlickr = function (term) {
  console.log( 'Searching Flickr for:', term );

  // Fetch images from Flickr using AJAX
  
}

$(document).ready(function () {
  $('#search').on('submit', function (e) {
    e.preventDefault(); // Stay on this page, we'll do the AJAX request ourselves.
    const query = $('#query').val();
    searchFlickr( query );
  });
})
