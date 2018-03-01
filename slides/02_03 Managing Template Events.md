$(function() {

  //READ DATA
  $.ajax({
    url: 'js/data.json'
  }).done(function(data) {

    $('#petList').loadTemplate('appointment-list.html', data, {
      complete: function() {
        //Delete an Item
        $( '.pet-delete' ).on( 'click', function() {
          $(this).parents('.pet-item').remove(); //animation
        }); //delete a pet      
      } // complete
    }); // load template
  }); // ajax complete

  //EVENTS

  $('.apt-addheading').on('click',function() {
    $('.card-body').toggle(300);
  }); // click on add appointment

}); // Document is ready



$(this).parents('.pet-item').hide(300, function() {
  $(this).remove();
}); //animation
