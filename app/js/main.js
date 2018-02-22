$( document ).ready(function() {

  var data;

  function removeApt(aptID) {
  }

  function listAppointments(info) {
    $('#petList').loadTemplate('appointment-list.html', info, {
      complete: function() {
        $( '.pet-delete' ).on( 'click', function() {
          var whichItem = $(this).attr('id');
          $(this).parents('.pet-item').hide(300, function() {
            console.log(whichItem);
            removeApt( whichItem );
            $(this).remove();
            });
        });
      }
    });
  }

  $.ajax({
    url: "js/data.json",
    context: document.body,
    dataType: 'JSON'
  }).done(function(data) {
    listAppointments(data);
  });


});

