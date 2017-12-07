$(document).ready(function () {
  setInterval(function () {
    $.get('/info').done(function (data) {
      $('#brother').text( data.brother );
      $('#time').text( data.time );
      $('#uptime').text( data.uptime );
    });
  }, 3000);

  // setInterval(function () {
  //   $.get('/brother').done(function (b) {
  //     $('#brother').text( b );
  //   });
  // }, 4000);
  //
  // setInterval(function () {
  //   $.get('/time').done(function (t) {
  //     $('#time').text( t );
  //   })
  // }, 1000);
  //
  // setInterval(function () {
  //   $('#uptime').load('/uptime');
  // }, 7000);
})
