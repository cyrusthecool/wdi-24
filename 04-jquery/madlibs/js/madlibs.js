const makeMadLib = function (event) {
  const noun = $('#noun').val();
  const adjective = $('#adjective').val();
  const person = $('#person').val();

  const story = `${ person } <strong>really</strong> likes ${ adjective } ${ noun }`;

  $('#story').html( story ); // Setter

}

$('#lib-button').on('click', makeMadLib);
