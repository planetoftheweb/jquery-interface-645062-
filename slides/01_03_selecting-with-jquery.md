<!-- .slide: data-state="title" -->
# jQuery
Selectors and Events

### Author Notes

At it's very basic, jQuery simplifies the task of selecting elements on your page and performing actions on them. Let's take a look at how that works.

## Document Ready

The first thing you should know about jQuery is that all of it's functionality is hidden inside a special $ sign variable. Believe it or not a $ and an _ are valid javascript variable names, so jQuery uses this as a shortcut for all of it's functionality.


You usually target an element on the page and then use one of the many jQuery methods to do something with that element.

```
  $('.card-body').hide();
```

Although this simple example will work, we need to make sure that we only do things if the DOM is safe to manipulate. To make absolutely sure, we can use a special function called ready(). We can target the document and make sure that we encapsulate all of our commands inside a handler which is usually an anonymous function.

```
$( document ).ready(function() {

}); // Document is ready
```

There is a shortcut that lets you leave out the ready method and use the callback directly inside dollar sign function. This is the preferred method of calling the ready function as of jQuery 3.

That's because normally the $ sign function is designed to make a selection in the DOM. The ready method doesn't depend on any selections being made, so we don't actually need it here.

```
$(function() {

}); // Document is ready
```

Once the Document, also called the DOM is ready to be manipulated, we can use the dollar sign function to make a selection. It works almost exactly like javascript's querySelector and querySelectorAll methods, but it can do a lot more.

```
  $('.apt-addheading .card-body').hide();
```

You can pretty much use any CSS selector and it will work. jQuery has a ton of additional selectors you can use that are not available or possible with CSS. So for example you can target CSS that is in the process of being animated or even target the parents of elements.

jQuery uses dot notation that allow you to chain a number of functions together to do something.


In addition to that, you can also handle events on the page. jQuery has specific event handlers for things like clicks, key presses and just about anything you can do with javascript. One advantage is that jQuery makes those events more backwards compatible and consistent between platforms.

Sometimes, it's more convenient to use the shortcut selectors like .click, but the .on selector allows you to call any DOM event and use more flexible parameters.

//Toolbar Clicked
$('.apt-addheading').on( 'click', function() {
  $('.card-body').toggle(300);
}); //Toolbar Clicked

Let's modify our CSS so our form starts out hidden.

```
.bg-primary, .btn-primary {
  background-color: #377BB5 !important;
  border: inherit;
}
.add-appointment .card-body {
  display: none;
}

.add-appointment label {
  font-weight: 700;
}
```


## Conclusion
It's smart to use the ready method to wait for the DOM to become safe to use and as you can see jQuery gives you a lot of options for doing selections and managing events. For more information on the selectors and methods, take a look at the jQuery documentation at this URL. We'll be covering a lot more of them in this course.
http://api.jquery.com/
