'use strict'
import React from 'react'
import ReactRouter from 'react-router'
import Auth from './auth'

var RouteHandler  = ReactRouter.RouteHandler;
var Link = ReactRouter.Link;

var Master = React.createClass({
    getInitialState: function (){
        return {
          loggedIn : Auth.loggedIn()
        }
    },

    setStateOnAuth: function (loggedIn){
      this.setState({
        loggedIn: loggedIn
      });
    },
    componentWillMount: function (){
      Auth.onChange = this.setStateOnAuth;
      Auth.login();
    },
    login: function(){
      this.state.isLoggedIn = true;
    },
    logout: function(){
      this.state.isLoggedIn = false;
    },
    render: function (){
      var links = [];
      if (this.state.loggedIn) {
        links.push(<li><span className="welcome-box">Welcome Kofi Manu </span></li>)
        links.push(<li><Link to="logout">Log out</Link></li>)
      }else {
        links.push(<li><Link to="signin">Sign in</Link></li>)
      }
      return(<div>

         <div className="navbar navbar-default navbar-fixed-top" role="navigation">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand">BDC</a>
            </div>
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                {{ links }}
              </ul>
              </div>
            </div>
        </div>

        <RouteHandler />
      </div>)
    }
  });

export default Master;
