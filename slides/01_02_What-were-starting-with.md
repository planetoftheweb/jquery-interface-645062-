<!-- .slide: data-state="title" -->
# Buildling an Interface
Using jQuery

### Author Notes

Let's take a look at the template we're using to get started with this project.

## Bootstrap
I'm using bootstrap to build the interface. This course uses version 4 of the framework. So, at the very top of the page, you can see that I'm including the Bootstrap CSS code.

If you look through the code, you can see that I'm using bootstrap classes to help me build the interface for this project. I'm not talking much about how I do this in this course, since we're focusing on jQuery, but if you want to learn how to work with Bootstrap, make sure you check out my other course: [Bootstrap 4 Essential Training](https://www.linkedin.com/learning/bootstrap-4-essential-training/using-colors-with-bootstrap?u=104)

At the bottom of the page, I'm loading the required javascript libraries for bootstrap including jQuery, Popper, which helps you with dropdowns and popups in Bootstrap.

One change I made here is to load the regular version of jQuery instead of jQuery light. jQuery Light is a smaller version of jquery and if you look at the Bootstrap documentation, it shows you to load this instead of the regular version of jQuery. However, I'm going to be using AJAX to load external content, so I'm going to need the regular version of jQuery.

Other than that, I have a link to bootstrap and my own script.js file. That file is completely empty right now. You can see that all of the javascript libraries have been loaded into the js inside a lib folder.

The main javascript file we'll be working with is just on the main level of the js folder. In that folder, you'll also notice a data.json file with some JSON data. We'll be using that as sample information for this project.

## Font Awesome
At the top of our page, I've also loaded the font-awesome library. Version 4 of Bootstrap doesn't have any icons so I need to load these myself.

## CSS
There is some minor CSS I've written to override things like the Bootstrap Colors I'm using and change the fonts. Very small stuff.

## HTML

My application is pretty simple, for right now everything, including the template we'll need is in our HTML page. There are three parts to this code, the form where you enter a new appointment, the search section with a dropdown menu and an area for displaying the list of appointments.

## Conclusion
I've taken care of setting up most of the HTML and the CSS for you, we'll start working with jQuery in the next video.
