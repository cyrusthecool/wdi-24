$(document).ready(function () {
  // Parallax effects ///////////////////////////////////////////////
  const $body = $('body');
  const $bill = $('.bill');

  $(window).on('scroll', function () {
    const scrollTop = $(window).scrollTop();
    $bill.css('background-position-y', -scrollTop / 3);
    $body.css('background-position-y', -scrollTop * 0.75);
  });

  // Bubbles ////////////////////////////////////////////////////////
  $(window).on('mousemove', function (e) {
    const {pageX: x, pageY: y} = e; // Destructuring

    const size = (Math.random() * 10) + 'em';

    const $bubble = $('<div class="bubble"></div>').css({
      left: x,
      top: y,
      width: size,
      height: size
    }).appendTo($body);

    $bubble.animate({top: -200}, 3000, function () {
      $bubble.remove(); // Clean up after ourselves to conserve memory.
    });
  });
});
