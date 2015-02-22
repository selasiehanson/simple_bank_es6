'use strict'
import React from 'react'
import ReactRouter from 'react-router'

var RouteHandler  = ReactRouter.RouteHandler;
var Link  = ReactRouter.Link

var AppMenu = React.createClass({
  render : function (){
    return (
      <ul className="nav nav-sidebar">
          <li> <Link className="" to="checkAccounts">Check accounts</Link> </li>
          <li><Link className="" to="transferFunds">Transfer funds</Link></li>
          <li><Link className="" to="accountHistory">Accounts History</Link></li>
        </ul>
    );
  }
});


export default AppMenu;
