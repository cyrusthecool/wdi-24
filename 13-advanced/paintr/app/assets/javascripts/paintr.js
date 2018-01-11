$(document).ready(function () {
  $('#add-color').on('click', function () {
    const color = $('#color').val();
    const $swatch = $('<div />').addClass('swatch').css('background-color', color);
    $swatch.appendTo('.palette');
  });
});
