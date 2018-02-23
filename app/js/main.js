$( document ).ready(function() {

  var aptData;

  function removeApt(aptID) {
    var whichApt = _.find(aptData, function(item){
      return item.id === aptID; 
    });

    aptData = _.without(aptData, whichApt);
  }

  function listAppointments(info) {
    $('#petList').loadTemplate('appointment-list.html', info, {
      complete: function() {
        $( '.pet-delete' ).on( 'click', function() {
          var whichItem = $(this).attr('id');
          $(this).parents('.pet-item').hide(300, function() {
            removeApt(whichItem);
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
    aptData = data;
    listAppointments(data);
  });


});

