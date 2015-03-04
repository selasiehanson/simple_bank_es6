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

var { Link, RouteHandler, Route, Routes, DefaultRoute }  = ReactRouter
var routes = (
    <Route handler={Master}>
      <DefaultRoute handler={App} />
      <Route name="home" handler={App}>

        <Route name="checkAccounts" handler={CheckAccounts} />
        <Route name="transferFunds" handler={TransferFunds} />
        <Route name="accountHistory" handler={AccountsHistory} />
        <Route name="accounts" handler={Accounts}>
          <Route name="newaccount"  handler={NewAccount} path="/home/accounts/new" />
          <Route name="editaccount" handler={NewAccount}  path="/home/accounts/:clientId/edit" />
        </Route>
      </Route>
      <Route name="signin" handler={Login} />
      <Route name="logout" handler={Logout} />
    </Route>
  );


export default routes
