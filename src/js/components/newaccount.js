'use strict'
import React from 'react'
import ReactRouter from 'react-router'
import _ from "lodash"

import AccountActions from './actions/account-actions'

window.ud = _;

var {Link, RouteHandler } = ReactRouter;

var NewAccount = React.createClass({
  handleSubmit: function (){
    var data = {};
    var intFields = ["snnitNumber", 'accountNumber'];
    var fields = ["firstName", "lastName", "dateOfBirth", "phoneNumber",
                   "occupation", "branch",
                  "pin", "passCode"];

    fields = _.union(intFields, fields);
    fields.forEach(function (field){
      data[field] = this.refs[field].getDOMNode().value;
    }.bind(this))

    intFields.forEach(function (field){
      data[field] = parseInt(data[field]);
    });
    window.xx = data
    var date = new Date(data['dateOfBirth'])
    data['dateOfBirth'] = date.toJSON()

    console.log(data)
    console.log("sending data to AccountStore")
    AccountActions.addClient(data);
  },
  render : function (){
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading">  New Client  </div>
          <div className="panel-body">
            <div className="form-group col-md-6">
              <label> First name</label>
              <input ref="firstName" type="text" name="firstName" className="form-control" />
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
