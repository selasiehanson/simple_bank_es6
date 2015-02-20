'use strict'
import React from 'react'
import ReactRouter from 'react-router'

var RouteHandler  = ReactRouter.RouteHandler;
var Link = ReactRouter.Link;

var Master = React.createClass({
    getInitialState: function (){
        return {
          isLoggedIn : false
        }
    },
    login: function(){
      this.state.isLoggedIn = true;
    },
    logout: function(){
      this.state.isLoggedIn = false;
    },
    render: function (){
      var showLogout = {
        display: this.state.isLoggedIn ? "block" : "none"
      }

      var showLogin = {
        display: this.state.isLoggedIn ? "none" : "block"
      }
      return(<div>
        <h2> BDC APP</h2>
        <ul>
           <li><Link to="home">Home</Link></li>
           <li><Link style={showLogin}  to="signin">Sign in</Link></li>
           <li><Link style={showLogin}  to="signup">Sign up</Link></li>
           <li><Link style={showLogout} to="logout">Log out</Link></li>
         </ul>
        <RouteHandler />
      </div>)
    }
  });

export default Master;
