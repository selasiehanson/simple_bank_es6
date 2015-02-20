/* jshint -W030 */
'use strict';
import React from 'react'
import ReactRouter from 'react-router'
import Routes from './components/router'



React.render(<h2>Hello World</h2>, document.getElementById('app'));

// var routes = require("app/router")["default"];

// console.log(routes)
ReactRouter.run (Routes, function(Handler){
  React.render(<Handler />, document.getElementById('app'));
});
