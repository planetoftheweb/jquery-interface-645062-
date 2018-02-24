$( document ).ready(function() {

  var aptData, displayData, sortBy, sortDir;

  sortBy = 'petName';
  sortDir = 'asc';

  function removeApt(aptID) {
    var whichApt = _.find(aptData, function(item){
      return item.id === aptID; 
    });
    aptData = _.without(aptData, whichApt);
    displayData = aptData;
    console.log(aptData);
  }

  function listAppointments(info) {
    if (sortDir === 'asc') {
      info = _.sortBy(info, sortBy);
    } else  {
      info = _.sortBy(info, sortBy).reverse();
    }

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
    aptData = displayData = data;
    listAppointments(displayData);
  });

  // EVENTS

  $('.apt-addheading').on( 'click', function() {
    $('.card-body').toggle(300);
  });

  $('.sort-by .dropdown-item').on( 'click', function() {
    var sortDropdown = $(this).attr('id');

    switch (sortDropdown) {
      case 'petName':
      case 'ownerName':
      case 'aptDate':
        sortBy = sortDropdown;
        $('.sort-by').removeClass('active');
        break;
      case 'asc':
      case 'desc':
      $('.sort-dir').removeClass('active');
      sortDir = sortDropdown;
        break;
    }
    $(this).addClass('active');

    listAppointments(displayData);
  });

  $('#SearchApts').keyup(function() {
    var searchText = $(this).val();
    displayData = _.filter(aptData, function(item){ 
      return (item.petName.toLowerCase().match(searchText.toLowerCase())) ||
      (item.ownerName.toLowerCase().match(searchText.toLowerCase())) ||
      (item.aptNotes.toLowerCase().match(searchText.toLowerCase()))
    });
    listAppointments(displayData);
  });

});

