#  jQuery: Building an Interface
This is the repository for my course  jQuery: Building an Interface. The full course is available on [LinkedIn Learning](https://linkedin-learning.pxf.io/c/1252977/449670/8005?u=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Fjquery-building-an-interface%3Fu%3D104)

[![ jQuery: Building an Interface](http://www.raybo.org/assets/images/courses/jqueryinterface.jpg)](https://linkedin-learning.pxf.io/c/1252977/449670/8005?u=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Fjquery-building-an-interface%3Fu%3D104)

Create an interactive user interface that uses the strengths of jQuery, Bootstrap, Underscore.js, and the vast library of jQuery plugins. Instructor Ray Villalobos shows how to use the jQuery selector engine to select DOM elements, and how to manage actions with jQuery events. He accesses external data with AJAX methods, and extends jQuery with plugins for templating webpages and formatting data. He also shows how to sort and search through data with the Underscore.js library and add and edit form data. This hands-one project will strengthen your jQuery skills and help you build more sophisticated and responsive user interfaces.

# Instructions

![Branches](http://pixelprowess.com/i/2018-07-13_14-10-12.png)

This repository has branches for each of the videos in the course. You can use the branch pop up menu in github to switch to a specific branch and take a look at the course at that stage. Or you can simply add `/tree/BRANCH_NAME` to the URL to go to the branch you want to peek at.

The branches are structured so that they correspond to the videos in the course. So, for example if I name a branch `02_03` then that branch corresponds to the second chapter and the third video in that chapter. The extra letter at the end of the name corresponds to the state of the branch. A `b` means that this is how the code looks at the beginning of the video, an `e` means that is how the code looked at the end of the video. The `master` branch usually has the final state of the code when I finish the course.

# Installation
- Make sure you have these installed
	- [node.js](http://nodejs.org/)
	- [git](http://git-scm.com/)
	- [gulp](http://git-scm.com/)

## Cloning All Branches
The best way to download use this course is to download all of the branches to your local hard drive. I create a course [Learning Git and Github](https://www.linkedin.com/learning/learning-git-and-github) that shows you the basics of git and github and how to work with these types of repos.

1. Open a linux compatible terminal application like [hyper](https://hyper.is/), the mac terminal or gitbash (you can install this when you install Git).
1. Switch to your desktop `cd ~/Desktop`
1. Create a new directory for the project `mkdir NAME`
1. Switch to your new directory `cd NAME`

### Cloning a Bare Repository
1. Clone a bare copy of this repository git clone --bare `path/to/repo.git .git` (make sure you add extra the .git at the end). You can copy the path to the repo from the clone or download button above.
1. `git config --bool core.bare false`
1. `git reset --hard `

### Install Dependencies
1. Install project dependencies using npm: `npm install`
1. Start the automation `gulp`

## Connect
Check out some of my other courses on [LinkedIn Learning](https://linkedin-learning.pxf.io/c/1252977/449670/8005?u=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Finstructors%2Fray-villalobos). You can follow me on [LinkedIn](https://www.linkedin.com/in/planetoftheweb/), read [my blog](http://raybo.org), [follow me on twitter](http://twitter.com/planetoftheweb)
