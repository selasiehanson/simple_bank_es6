'use strict'

import React from 'react'
import ReactRouter from 'react-router'

import Master from "./master";
import App from './app'
import CheckAccounts from './checkaccounts'
import TransferFunds from './transferFunds'
import AccountsHistory from './accountshistory'
import Login from './login'
import Logout from './logout'
import NewAccount from './newaccount'
import Accounts from './accounts'

var Link = ReactRouter.Link;
var Route = ReactRouter.Route;
var Routes = ReactRouter.Routes;
var RouteHandler = ReactRouter.RouteHandler;

var routes = (
    <Route handler={Master}>
      <Route name="home" handler={App}>
        <Route name="checkAccounts" handler={CheckAccounts} />
        <Route name="transferFunds" handler={TransferFunds} />
        <Route name="accountHistory" handler={AccountsHistory} />
        <Route name="accounts" handler={Accounts}>
          <Route name="newaccount" handler={NewAccount} />
        </Route>
      </Route>
      <Route name="signin" handler={Login} />
      <Route name="logout" handler={Logout} />
    </Route>
  );


export default routes
