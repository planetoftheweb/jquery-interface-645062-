$(function() {

  var aptData, sortBy, sortDir;

  sortBy = 'aptDate';
  sortDir = 'desc';

  //FUNCTIONS
  function removeApt(aptID) {
    var whichApt = _.find(aptData, function(item) {
      return item.id == aptID;
    });
    aptData = _.without(aptData, whichApt);
  }

  function listAppointments(info) {

    if (sortDir === 'asc') {
      info = _.sortBy(info, sortBy);
    } else {
      info = _.sortBy(info, sortBy).reverse()
    }

    $('#petList').loadTemplate('appointment-list.html', info, {
      complete: function() {
        $('.pet-delete').on('click', function() {
          $(this).parents('.pet-item').hide(300, function() {
            var whichItem = $(this).attr('id');
            removeApt(whichItem);
            console.log(aptData);
            $(this).remove();  
          });
        }); //delete apt
      } // complete
    }); //load template    
  }

  //READ DATA
  $.ajax({
    url: 'js/data.json'
  }).done(function(data) {
    aptData = data;
    listAppointments(aptData);
  }); //ajax loaded

  //EVENTS

  $('.apt-addheading').on('click',function() {
    $('.card-body').toggle(300);
  }); // click on add appointment

}); // Document is ready