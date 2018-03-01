## Loading a Template

Right now, we're loading the data directly into our fields using jQuery selectors. We could iterate through all of our data and process HTML into the fields directly like this, but in more complex situations, it might be better to use a template. That's going to make it easier to modify your HTML and give us a better way to manage how our data is displayed.

One of the ways to do this is to add functionality to jQuery by using a plugin. A plugin is a separate library that can add funtionality to jQuery, but that works with the jQuery infrastructure. If you think about it, Bootstrap works like a plug-in in that it extends what jQuery can do.

We're going to use a popular templating system called [jQuery Template](http://codepb.github.io/jquery-template/).

We'll get started by adding the code the call to this library from our index.html file. I've already loaded the plugin for you into the js/lib folder.

<script src="js/lib/jquery.loadTemplate.min.js"></script>

Most of the code that needs to go into our template is sitting in the main index file. In order to declare it as our template, you can see that jQuery let's you use a script tag to define our template or you can import the template as a separate file.

```
<script type="text/html" id="template">
    <div data-content="author"></div>
</script>
```

For simple templates, the script tag technique will work, but for longer templates, I like to isolate things into a separate file.


```
//READ DATA
$.ajax({
  url: 'js/data.json'
}).done(function(data) {
  $('#petList').loadTemplate('appointment-list.html', data);
}); // data loaded
```



```<div class="pet-item col media py-3" data-id="id">
  <div class="mr-3">
    <button class="pet-delete btn btn-sm btn-danger">
```

 `data-id="id"`

 ```
 <span class="pet-name"
  contenteditable="true"
  data-content="petName"
  id="field-petName"></span>
```

`data-content="petName"`

```
<span class="apt-date ml-auto"
data-format="formatDate" data-content="aptDate"></span>
```

`data-format="formatDate`

```
<span contenteditable="true"
 data-content="ownerName"
 id="field-ownerName"></span>
```

`data-content="ownerName"`

```
<div class="apt-notes"
  contenteditable="true"
  data-content="aptNotes"
  id="field-aptNotes"></div>
```

`data-content="aptNotes"`

## Conclusion
Plugins can add functionality to jQuery that can save you time and help take care of common tasks. They do add a bit of weight to your application so you have to weight the benefits of the functionality agains the increased loading times.
