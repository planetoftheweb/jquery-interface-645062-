jQuery works great for managing the DOM, but so far, we're not really doing anything with the data itself. Let's take a look at what it takes to work with our data.


Our template is created with a series of elements, but there isn't really an index that lets us determine which element we're looking at. Our JSON file has a field called index and we can easily add that to our template. Let's do that in the id parameter.

```
<div class="pet-item col media py-3"
  data-id="id">
```

Add `data-id="id"` to appointment-list.html

We could try to use that index using javascript's splice method to delete the element.

```
$('.pet-delete').on('click', function() {
  $(this).parents('.pet-item').hide(300, function() {
    var whichItem = $(this).attr('id');
    removeApt(whichItem);
    // data.splice(Number(whichItem), 1);
    console.log(aptData);            
    $(this).remove();
  });
}); //delete apt
```
add `data.splice(Number(whichItem), 1);`

The problems is that as soon as we delete an element, the index of each array no longer matches the index we stored with the template. We need a way to find out the index of our data and remove it.

You could write the code for that yourself, but there's a library that specialized in managing data called underscore. I often use it in a lot of projects and we'll be using many of it's methods in our applications.

```
<script src="js/lib/underscore-min.js"></script>
<script src="js/script.js"></script>
```

Add underscore library.

As you'll see throughout the application, I want the data to be available more than just in the ajax call, so I'm going to create a variable to store our application data.

```
$(function() {

  var aptData;

```

Create a variable to hold our data in the application.

`var aptData;`

Now we need to build a function that will modify the data.

```
var aptData;

// FUNCTIONS
function removeApt(aptID) {
  var whichApt = _.find(aptData, function(item){
    return item.id === aptID;
  });
  aptData = _.without(aptData, whichApt);
}
```

Add the function to delete the data.

```
$('.pet-delete').on('click', function() {
  $(this).parents('.pet-item').hide(300, function() {
    var whichItem = $(this).attr('id');
    removeApt(whichItem);
    $(this).remove();
  });
}); //delete apt
```

Add the removeApt call
```
var whichItem = $(this).attr('id');
removeApt(whichItem);
```

## Conclusion
Underscore is a fantastic library for working with data. It's small and makes things like managing arrays simple. As you'll see, it's going to become more useful as we do things like sort and search through our content.
