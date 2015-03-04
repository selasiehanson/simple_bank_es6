'use strict'
import React from 'react'
import ReactRouter from 'react-router'

var RouteHandler  = ReactRouter.RouteHandler;
var Link  = ReactRouter.Link

export default React.createClass({
  render: function (){
    return (
      <div>
        <ul className="nav nav-sidebar nav-caption">
            <li> <a className="side-caption"> APPS </a> </li>
        </ul>
        <ul className="nav nav-sidebar nav-content">
            <li> <Link className="" to="checkAccounts">My Accounts</Link> </li>
            <li><Link className="" to="transferFunds">Transfer funds</Link></li>
            <li><Link className="" to="accountHistory">Accounts History</Link></li>
        </ul>
        <ul className="nav nav-sidebar nav-caption">
            <li> <a className="side-caption"> Admin </a> </li>
        </ul>
        <ul className="nav nav-sidebar nav-content">
          <li><Link className="" to="accounts">Client Accounts</Link></li>
        </ul>
      </div>
    );
  }
});
