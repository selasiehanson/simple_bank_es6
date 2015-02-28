'use strict'

import React from 'react'
import ReactRouter from 'react-router'
import AccountsStore from './stores/accounts-store'
import AccountActions from './actions/account-actions'
import _ from 'lodash'

var { Link, RouteHandler } = ReactRouter;

function getAccounts (){
  return {
    accounts: AccountsStore.all()
  }
}

window.sss = AccountsStore;
var Accounts = React.createClass({
  mixins: [ReactRouter.State, AccountsStore.mixin],
  getInitialState: function (){
    return getAccounts();
  },
  componentDidMount: function (){
     AccountActions.loadClients();
  },
  storeDidChange: function (){
    this.setState(getAccounts());
    console.log("store has changed");
  },
  render: function (){
    var page = _.last(this.getPath().split("/"));
    var klass = '' ;
    var showNew = {};

    if(page === 'newaccount'){
      klass = 'col-md-6';
      showNew.display = 'block';
    }else {
      klass = 'col-md-12';
      showNew.display = 'none';
    }

    var rows = this.state.accounts.map(function (account, idx){
      return (
        <tr>
          <td className="ax-grid-action-1"> {idx + 1}. </td>
          <td> {account.firstName} { account.lastName} </td>
          <td> {account.accountNumber} </td>
          <td> {account.branch} </td>
        </tr>);
      });

      return (  <div>
        <div className="page-header clearfix">
          <h2 className="pull-left">Client Accounts </h2>
          <Link to="newaccount" className="btn btn-primary pull-right header-btn"> Add new account </Link>
        </div>
          <div className={klass} style={showNew}>
            <RouteHandler />
          </div>
          <div className={klass}>
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Account Number</th>
                  <th>Branch</th>
                </tr>
              </thead>
              <tbody>
                 {rows}
              </tbody>
            </table>
          </div>
      </div>
    );
  }
});


export default Accounts;
