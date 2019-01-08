# Messageboard

This website will allow users to ask questions to the general populace. Questions can be viewed and answered. Answers can be voted up and down due to general appeal.

## Prerequisites

You will need the following things properly installed on your computer. Admin username is "Ben", Password is "Awesome"

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd messageboard`
* `npm install`
* `bower install`

## BDD
-users can ask questions and provide name: "What is a orange", "Ben";
  -questions can be edited: "What is an orange?";
-users can answer questions and provide name: "A fruit", "Matt";
  -users can edit answers: "A fruit.";
  -users can vote up and vote down answers: "Matt answer voted down" Votes: -1;
-users can mark a questions as answered: true; "Question has been solved"
-user can log in as admin to gain admin features;
  -admin can delete answers: "deleted";
  -admin can delete questions: "deleted";

## Licensing

* MIT

Copyright (c) 2016 **_Ben Vissotzky_**
