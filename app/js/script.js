$( document ).ready(function() {

  var aptData, displayData, sortBy, sortDir;

  sortBy = 'aptDate';
  sortDir = 'desc';

  // FUNCTIONS
  function removeApt(aptID) {
    var whichApt = _.find(aptData, function(item){
      return item.id === aptID; 
    });
    aptData = _.without(aptData, whichApt);
    displayData = aptData;
  }

// LIST APPOINTMENTS
function listAppointments(info) {
  if (sortDir === 'asc') {
    info = _.sortBy(info, sortBy);
  } else  {
    info = _.sortBy(info, sortBy).reverse();
  }

    // Create a formatter for dates
    $.addTemplateFormatter("formatDate",
    function(value, template) {
        return $.format.date(new Date(value), 'MM/dd hh:mm p');
    }); //date formatter

    // Load the template
    $('#petList').loadTemplate('appointment-list.html', info, {
      complete: function() {

        //Delete an Item
        $( '.pet-delete' ).on( 'click', function() {
          var whichItem = $(this).parents('.pet-item').attr('id');
          $(this).parents('.pet-item').hide(300, function() {
            removeApt(whichItem);
            $(this).remove();
          }); //animation
        }); //delete a pet
        
        // Change in Editable Content box
        $('[contenteditable]').on('blur', function() {
          var whichID, fieldName, fieldData;
          whichID = Number($(this).parents('.pet-item').attr('id'));
          fieldName = $(this).attr('id').replace(/field-/g, '');
          fieldData = $(this).text();
          aptData[whichID][fieldName] = fieldData;
        });

      } // load complete
    }); //load template
  }


  // READ DATA
  $.ajax({
    url: "js/data.json",
    context: document.body,
    dataType: 'JSON'
  }).done(function(data) {
    aptData = displayData = data;
    listAppointments(displayData);
  }); //Read Data

  // EVENTS

  //Toolbar Clicked
  $('.apt-addheading').on( 'click', function() {
    $('.card-body').toggle(300);
  }); //Toolbar Clicked

  // Dropdown Activated
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
  }); // Dropdown activated

  // Typing in search box
  $('#SearchApts').keyup(function() {
    var searchText = $(this).val();
    displayData = _.filter(aptData, function(item){ 
      return (item.petName.toLowerCase().match(searchText.toLowerCase())) ||
      (item.ownerName.toLowerCase().match(searchText.toLowerCase())) ||
      (item.aptNotes.toLowerCase().match(searchText.toLowerCase()))
    });
    listAppointments(displayData);
  }); //Search Box

  // Submit form
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
  }); //Submit form
  
});