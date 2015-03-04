'use strict'
import React from 'react'
import ReactRouter from 'react-router'
import _ from "lodash"

import AccountActions from './actions/account-actions'
import AccountsStore from './stores/accounts-store'

window.ud = _;

var {Link, RouteHandler } = ReactRouter;

var intFields = ["snnitNumber", 'accountNumber'];
var fields = ["firstName", "lastName", "dateOfBirth", "phoneNumber",
               "occupation", "branch",
              "pin", "passCode"];

fields = _.union(intFields, fields);

var NewAccount = React.createClass({
  mixins: [ReactRouter.State, AccountsStore.mixin],

  getInitialState: function (){
    var clientId = this.getParams().clientId || -1;
    if(clientId > 0) {
      AccountActions.getClient(clientId);
    }
    return {};
  },
  storeDidChange: function (){
    var client = AccountsStore.getSelected()
    fields.forEach((field) => {
      this.refs[field].getDOMNode().value = client[field];
    });
    this.refs['pin'].getDOMNode().value = '';
    this.refs['passCode'].getDOMNode().value = '';
    this.setState({
      clientId: client.id
    });
  },
  handleSubmit: function (){
    var data = {};

    fields.forEach(function (field){
      data[field] = this.refs[field].getDOMNode().value;
    }.bind(this));

    intFields.forEach(function (field){
      data[field] = parseInt(data[field]);
    });

    var date = new Date(data['dateOfBirth'])
    data['dateOfBirth'] = date.toJSON()
    if(this.state.clientId){
      data['id'] = this.state.clientId;
      AccountActions.updateClient(data);
    }else {
      AccountActions.addClient(data);
    }
  },
  render : function (){
    window.kl = this.state
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading">  New Client  </div>
          <div className="panel-body">
            <div className="form-group col-md-6">
              <label> First name</label>
              <input ref="firstName"  type="text" name="firstName" className="form-control" />
            </div>
            <div className="form-group col-md-6">
              <label> Last name</label>
              <input ref="lastName" type="text" name="lastName" className="form-control" />
            </div>
            <div className="form-group col-md-6">
              <label> Date of birth</label>
              <input ref="dateOfBirth" type="text" name="dateOfBirth" className="form-control" />
            </div>
            <div className="form-group col-md-6">
              <label> Phone Number</label>
              <input ref="phoneNumber" type="text" name="phoneNumber" className="form-control" />
            </div>
            <div className="form-group col-md-6">
              <label> Social security no.</label>
              <input ref="snnitNumber" type="text" name="snnitNumber" className="form-control" />
            </div>
            <div className="form-group col-md-6">
              <label> Occupation</label>
              <input ref="occupation" type="text" name="occupation" className="form-control" />
            </div>
            <br /> <br />
            <div className="account-details-hdr"> Account Details  </div>
            <hr />
              <div className="form-group col-md-6">
                <label> Account Number</label>
                <input ref="accountNumber" type="text" className="form-control" />
              </div>
              <div className="form-group col-md-6">
                <label> Branch</label>
                <input ref="branch" type="text" className="form-control" />
              </div>
              <div className="form-group col-md-6">
                <label> Pin</label>
                <input ref="pin" type="text" className="form-control" />
              </div>
              <div className="form-group col-md-6">
                <label> Pass code</label>
                <input ref="passCode" type="text" className="form-control" />
              </div>
          </div>
          <div className="panel-footer">
              <Link to="accounts"  className="btn btn-sm btn-default btn-right-space"> Cancel </Link>
              <button onClick={this.handleSubmit} className="btn btn-sm btn-success"> Save Record </button>
          </div>
        </div>
      </div>
    );
  }
});

export default NewAccount;
