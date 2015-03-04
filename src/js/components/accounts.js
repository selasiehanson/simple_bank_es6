'use strict'

import React from 'react'
import ReactRouter from 'react-router'
import AccountsStore from './stores/accounts-store'
import AccountActions from './actions/account-actions'
import _ from 'lodash'

var { Link, RouteHandler } = ReactRouter;

function getAccounts (){
  return {
    accounts: AccountsStore.all(),
    currentClientId: 0
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
  onEditClicked: function (e){
    console.log("edit clicked")
    var clientId = this.getParams().clientId || -1;
    if(clientId > 0) {
      AccountActions.getClient(clientId);
    }
  },
  onDeleteClient: (id) => {
    console.log(`${id}  clicked to be deleted`)
    AccountActions.deleteClient(id);
  },
  render: function (){
    var pages = _.compact(this.getPath().split("/"));
    var page = _.last(pages)

    var klass = '' ;
    var showNew = {};

    if(page === 'new' || page === 'edit'){
      klass = 'col-md-6';
      showNew.display = 'block';
    }
    else {
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
          <td>
            <Link className="" to="editaccount" params={{ clientId: account.id }} onClick={this.onEditClicked}>
              <span className="glyphicon glyphicon-edit" aria-hidden="true"></span>
            </Link>
            <a className="delete-icon" onClick={this.onDeleteClient.bind(this, account.id)}> <span className="glyphicon glyphicon-trash"> </span> </a>
          </td>
        </tr>);
      }.bind(this));

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
                  <th className="ax-grid-action-3">
                  </th>
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
