$(function() {


  //READ DATA
  $.ajax({
    url: 'js/data.json'
  }).done(function(data) {

    $('#petList').loadTemplate('appointment-list.html', data);


  });

  //EVENTS

  $('.apt-addheading').on('click',function() {
    $('.card-body').toggle(300);
  }); // click on add appointment

}); // Document is ready