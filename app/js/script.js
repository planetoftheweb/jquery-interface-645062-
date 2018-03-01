$(function() {


  //READ DATA
  $.ajax({
    url: 'js/data.json'
  }).done(function(data) {

    $('#petList').loadTemplate('appointment-list.html', data, {
      complete: function() {
        $('.pet-delete').on('click', function() {
          $(this).parents('.pet-item').hide(300, function() {
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