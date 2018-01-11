$(document).ready(function () {
  $('#add-color').on('click', function () {
    const color = $('#color').val();
    const $swatch = $('<div />').addClass('swatch').css('background-color', color);
    $swatch.appendTo('.palette');
  });

  // Event delegation
  // We can listen for events on elements that don't exist when the page is loaded.
  $('.palette').on('click', '.swatch', function () {
    $('.selected').removeClass('selected'); // Prevent having multiple swatches selected.
    $(this).addClass('selected');
    console.log('new color selected');
  });

  // Here event delegation reduces the number of event handlers required in the browser.
  $('.canvas').on('mouseover', '.pixel', function (event) {

    if (event.shiftKey) return;

    const color = $('.swatch.selected').css('background-color');
    $(this).css('background-color', color);
  });
});
