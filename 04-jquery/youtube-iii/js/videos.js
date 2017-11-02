const thumbnailify = function (i) {
  let $link = $( $links[i] ); // Turn this back into a jQuery object
  let href = $link.attr('href'); // .attr() with one argument is a getter
  let thumbnailURL = youtube.generateThumbnailUrl( href );

  // Chaining
  let $thumbnail = $('<img>').attr('src', thumbnailURL); // .attr() with two arguments is a setter
  $link.append( $thumbnail );

  $link.on('click', function (event) {
    event.preventDefault(); // Do not follow the link.

    const videoURL = $(this).attr('href');
    const embedURL = youtube.generateEmbedUrl( videoURL );

    const embedCode = `<iframe width="560" height="315" src="${ embedURL }" frameborder="0" allowfullscreen></iframe>`;

    $('#player').hide().html( embedCode ).fadeIn(5000);
  });
};

const $links = $('a');
$links.each( thumbnailify );
