'use strict'
import React from 'react'
import Auth from './auth'

var Logout = React.createClass({
  componentDidMount: function (){
    Auth.logout();
  },
  render: function (){
    return (
      <div className="centerbox container">
        <h2> Logged out </h2>
      </div>
    );
  }
});

export default Logout;
