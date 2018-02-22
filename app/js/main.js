$( document ).ready(function() {

  var data;

  function listAppointments(info) {
    $("#petList").loadTemplate($('#template'), info);
  }


  $.ajax({
    url: "js/data.json",
    context: document.body,
    dataType: 'JSON'
  }).done(function(data) {
    console.log(data);
    listAppointments(data);
  });
  

});

