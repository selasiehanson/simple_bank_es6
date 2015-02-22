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
        links.push(<li><Link to="home">Home</Link></li>)
        links.push(<li><Link to="logout">Log out</Link></li>)
      }else {
        links.push(<li><Link to="signin">Sign in</Link></li>)
        links.push(<li><Link to="signup">Sign up</Link></li>)
      }
      return(<div>
        <h2> BDC APP</h2>
        <ul>
           { links }
         </ul>

         <div className="navbar navbar-default navbar-fixed-top" role="navigation">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">BDC</a>
            </div>
            <div className="navbar-collapse collapse">              
              <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">Welcome Kofi Manu <span className="caret"></span></a>
                  <ul className="dropdown-menu" role="menu">
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">App Settings</a></li>
                    <li className="divider"></li>
                    <li><a href="#">Sign out</a></li>
                  </ul>
                </li>
              </ul>
              </div>
            </div>
        </div>

        <RouteHandler />
      </div>)
    }
  });

export default Master;
