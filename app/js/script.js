$(function() {

  var aptData, displayData, sortBy, sortDir;

  sortBy = 'aptDate';
  sortDir = 'desc';

  //FUNCTIONS
  function removeApt(aptID) {
    var whichApt = _.find(aptData, function(item) {
      return item.id == aptID;
    });
    aptData = _.without(aptData, whichApt);
    displayData = _.without(displayData, whichApt);
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
    aptData = displayData = data;
    listAppointments(displayData);
  }); //ajax loaded

  //EVENTS

  // click on add appointment
  $('.apt-addheading').on('click',function() {
    $('.card-body').toggle(300);
  }); // click on add appointment

  // click on dropdown menu item
  $('.sort-menu .dropdown-item').on('click', function() {
    var sortDropDown = $(this).attr('id');

    switch (sortDropDown) {
      case 'sort-petName':
        $('.sort-by').removeClass('active');
        sortBy = 'petName';
        break;
      case 'sort-ownerName':
        $('.sort-by').removeClass('active');
        sortBy = 'ownerName';
        break;
      case 'sort-aptDate':
        $('.sort-by').removeClass('active');
        sortBy = 'aptDate';
        break;
      case 'sort-asc':
        $('.sort-dir').removeClass('active');
        sortDir = 'asc';
        break;
      case 'sort-desc':
        $('.sort-dir').removeClass('active');
        sortDir = 'desc';
        break;
    }

    $(this).addClass('active');
    listAppointments(displayData);
  });

  // Typed in search box
  $('#SearchApts').keyup(function() {
    var searchText = $(this).val();

    displayData = _.filter(aptData, function(item) {
      return (
        item.petName.toLowerCase().match(searchText.toLowerCase()) || 
        item.ownerName.toLowerCase().match(searchText.toLowerCase()) || 
        item.aptNotes.toLowerCase().match(searchText.toLowerCase())       
      )
    }); // filter

    listAppointments(displayData);
  }); //keyup on search

}); // Document is ready