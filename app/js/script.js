$( document ).ready(function() {

  var aptData, displayData, sortBy, sortDir;

  sortBy = 'aptDate';
  sortDir = 'desc';

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

    $.addTemplateFormatter("formatDate",
    function(value, template) {
        return $.format.date(new Date(value), 'MM/dd hh:mm p');
    });

    $('#petList').loadTemplate('appointment-list.html', info, {
      complete: function() {
        $( '.pet-delete' ).on( 'click', function() {
          var whichItem = $(this).parents('.pet-item').attr('id');
          $(this).parents('.pet-item').hide(300, function() {
            removeApt(whichItem);
            $(this).remove();
          }); //animation
        }); //delete a pet
        
        $('[contenteditable]').on('blur', function() {
          var whichItem = $(this).parents('.pet-item').attr('id');          
          var whichApt = _.indexOf(aptData, whichItem.id);
          console.log(whichApt);
        });
      

      } // load complete
    }); //load template
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
      case 'sort-petName':
        $('.sort-by').removeClass('active');
        sortBy = 'petName';
        break;      
      case 'sort-ownerName':
        $('.sort-by').removeClass('active');
        sortBy = 'ownerName';
        break;      
      case 'sort-aptDate':
        sortBy = 'aptDate';
        $('.sort-by').removeClass('active');
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

  $('#SearchApts').keyup(function() {
    var searchText = $(this).val();
    displayData = _.filter(aptData, function(item){ 
      return (item.petName.toLowerCase().match(searchText.toLowerCase())) ||
      (item.ownerName.toLowerCase().match(searchText.toLowerCase())) ||
      (item.aptNotes.toLowerCase().match(searchText.toLowerCase()))
    });
    listAppointments(displayData);
  });

  $( "#aptForm" ).submit(function( e ) {
    var newItem = {};
    e.preventDefault();

    newItem.petName = $('#petName').val();
    newItem.ownerName = $('#ownerName').val();
    newItem.aptDate = $('#aptDate').val() + ' ' + $('#aptTime').val();
    newItem.aptNotes = $('#aptNotes').val();
    aptData.push(newItem);
    listAppointments(displayData);
    $( "#aptForm" )[0].reset();
    $('.card-body').hide(300);
  });
    

});

