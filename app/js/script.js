$(function() {


  //READ DATA
  $.ajax({
    url: 'js/data.json'
  }).done(function(data) {
    $('#field-petName').text(data[0].petName);
    $('#field-ownerName').text(data[0].ownerName);
    $('#field-aptNotes').text(data[0].aptNotes);
  });

  //EVENTS

  $('.apt-addheading').on('click',function() {
    $('.card-body').toggle(300);
  }); // click on add appointment

}); // Document is ready