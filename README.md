Simple Bank App
==============

Nothing fancy

## Objectives

- Learn ES 6
- implement solution with react js

## Features

- Customer sign in and sing out
- New Account creation
- Checking of account balances
- Transfer of funds

## Libraries
- React
- ReactRouter
- [JSPM React](https://github.com/tinkertrain/jspm-react) created a fork of this project

## Commands
- Gulp tasks:
    - `gulp` or `gulp serve` To run the application on port 3500, watchin changes on js files (compiling jsx) and sass files (compile, autoprefix and produce sourcemaps).
    - `gulp test` Shortcut to run karma, it of course can be run directly without gulp
    - `gulp build` Same as `gulp` except it doesn't run a server
    - `gulp dist` Make a distribution copy: Bundle the application in one JS file and minify it with Uglify, compile sass files and minify them, put everything in the dist folder.

Everything in the src folder is for example purposes. Have a look to see how everything is wired (the application itself is not finished and might not be).

## Why choose… ?

- ES6 modules: They're the future baby
- JSPM: Get the best of the npm and bower world with no hassle.
- Gulp: gulp won, is just better.
- Sass: sass has always been the best, node-sass brings the speed so no need for anything else.
- Karma: I like Testem too, but karma has a larger community around it and it's easy to integrate with SystemJS and jspm
- BrowserSync: Because is seriously awesome.
