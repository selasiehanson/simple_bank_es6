'use strict'
import React from 'react'
import ReactRouter from 'react-router'

var RouteHandler  = ReactRouter.RouteHandler;
var Link  = ReactRouter.Link

var AppMenu = React.createClass({
  render : function (){
    return (
        <div className="col-md-12">
          <Link className="btn btn-primary" to="checkAccounts">Check accounts</Link>
          <Link className="btn btn-primary col-md-offset-1" to="transferFunds">Transfer funds</Link>
          <Link className="btn btn-primary  col-md-offset-1" to="accountHistory">Accounts History</Link>
        </div>
    );
  }
});


export default AppMenu;
