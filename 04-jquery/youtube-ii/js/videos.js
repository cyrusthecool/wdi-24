const $links = $('a');

for (let i = 0; i < $links.length; i++) {
  let $link = $( $links[i] ); // Turn this back into a jQuery object
  let href = $link.attr('href'); // .attr() with one argument is a getter
  let thumbnailURL = youtube.generateThumbnailUrl( href );

  // Chaining
  let $thumbnail = $('<img>').attr('src', thumbnailURL); // .attr() with two arguments is a setter
  $link.append( $thumbnail );
}
