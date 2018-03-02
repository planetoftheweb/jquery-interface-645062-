$(function() {

  var aptData;

  //FUNCTIONS
  function removeApt(aptID) {
    var whichApt = _.find(aptData, function(item) {
      return item.id == aptID;
    });
    aptData = _.without(aptData, whichApt);
  }

  //READ DATA
  $.ajax({
    url: 'js/data.json'
  }).done(function(data) {
    aptData = data;

    $('#petList').loadTemplate('appointment-list.html', data, {
      complete: function() {
        $('.pet-delete').on('click', function() {
          $(this).parents('.pet-item').hide(300, function() {
            var whichItem = $(this).attr('id');
            removeApt(whichItem);
            // data.splice(Number(whichItem), 1);
            console.log(aptData);
            $(this).remove();  
          });
        }); //delete apt
      } // complete
    }); //load template


  }); //ajax loaded

  //EVENTS

  $('.apt-addheading').on('click',function() {
    $('.card-body').toggle(300);
  }); // click on add appointment

}); // Document is ready