'use strict'
import React from 'react'
import AppMenu from "./appmenu"
import ReactRouter from 'react-router'

var RouteHandler  = ReactRouter.RouteHandler;

var App = React.createClass({
  render: function (){
    return (<div>

      <AppMenu />

      <RouteHandler/>
     </div>);
  }
});


export default App;
