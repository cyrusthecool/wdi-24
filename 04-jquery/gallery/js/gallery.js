$(document).ready(function () {

  $('h1').funText(500, 'reverseCandy');
  $('a').funText(100, 'rainbow');

  $('img.thumbnail').on('click', function () {
    const imageSrc = $(this).attr('src'); // Getter
    $('#full').hide().attr('src', imageSrc).fadeIn(800); // Setter
  });

});
