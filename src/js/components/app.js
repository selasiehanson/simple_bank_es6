'use strict'
import React from 'react'
import ReactRouter from 'react-router'

import AppMenu from "./appmenu"
import Authentication from './authentication'

var RouteHandler  = ReactRouter.RouteHandler;

var App = React.createClass({
  mixins: [Authentication],
  render: function (){
    return (
        <div className="container-fluid">
            <div className="row" id="mainApp">
                <div className="sidebar">
                    <ul className="nav nav-sidebar">
                        <li> <a className="side-caption"> APPS </a> </li>
                    </ul>
                      <AppMenu />
                </div>
                <div className="main container-fluid" >
                    <div ng-app="masterAppApp" className="pane ">
                      <RouteHandler />
                    </div>

                </div>

            </div>
        </div>
     );
  }
});


export default App;
