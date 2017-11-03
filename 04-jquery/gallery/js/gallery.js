$(document).ready(function () {
  $('img.thumbnail').on('click', function () {
    const imageSrc = $(this).attr('src'); // Getter
    $('#full').hide().attr('src', imageSrc).fadeIn(800); // Setter
  });
});
