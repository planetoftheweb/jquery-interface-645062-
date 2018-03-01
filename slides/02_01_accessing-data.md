<!-- .slide: data-state="title" -->
# jQuery
Getting data

### Author Notes

As we saw in the previous movie with events and the ready function, jQuery will give you more than one way to do the same thing. Often, there's nothing wrong with your different options and what you choose is a matter of preference. Some methods are shortcuts of other methods and that's definitely the case when we want to load up some data from an external file.

jQuery provides a number of methods for handling the loading of data, but before we do anything, I have to remind you that this is not going to work unless your files are loading from a server. So just opening this index.html file in your browser is not going to work. You either have to upload it through FTP to a server or run a local server to use this.

I've already set up everything for you previously, but make sure that you take a look at the video on using the exercises for this course.

jQuery provides a number of methods for loading external data onto your application. This technique is called AJAX, which stands for asynchronous javascript and XML. It doesn't really have much to do with XML anymore.

Loading data in the JSON format is so common that there is a preset for that in jQuery called [getJSON](http://api.jquery.com/jQuery.getJSON/).

```
// READ DATA
$.getJSON('js/data.json').done(function(data) {

    $('#field-petName').text(data[0].petName);
    $('#field-ownerName').text(data[0].ownerName);
    $('#field-aptNotes').text(data[0].aptNotes);

}); //Read Data
```

The generic function for making AJAX requests is called [$.ajax](http://api.jquery.com/jQuery.ajax/). It's similar to getJSON, but it allows for more flexibility.

```
// READ DATA
$.ajax({
  url: 'js/data.json',
  context: document.body,
  dataType: 'JSON'
}).done(function(data) {
  $('#field-petName').text(data[0].petName);
  $('#field-ownerName').text(data[0].ownerName);
  $('#field-aptNotes').text(data[0].aptNotes);
}); //Read Data
```

So which one should you use. If all of you're doing is loading some JSON data, the getJSON is awesome. Typically however, you'll need to do more than simple load requests, you might need to use some of the other methods to create, delete or update information. The AJAX method gives you a consistent interface that is flexible enough to handle any of the methods you need.

## Conclusion
Managing AJAX requests is one of the reasons jQuery achieved a lot of it's popularity. jQuery gives you a consistent, easy to use methods for handling this common task. To learn more about some of the AJAX methods available to you, Take a look at [this URL]http://api.jquery.com/category/ajax/.
