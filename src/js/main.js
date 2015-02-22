/* jshint -W030 */
'use strict';
import React from 'react'
import ReactRouter from 'react-router'
import Routes from './components/router'


ReactRouter.run (Routes, function(Handler){
  React.render(<Handler />, document.getElementById('app'));
});
