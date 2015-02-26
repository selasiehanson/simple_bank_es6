'use strict'
import React from 'react'
var TransferFunds = React.createClass({
  transferFunds: function (){
    console.log("transfering funds")
  },
  render: function (){
    return(
      <div>
        <div className="page-header"> <h2>Transfer Funds</h2> </div>
          <div className="col-md-12" style= {{ marginBottom: 60}}>
            <div className="form-group col-md-4">
              <label> Select account</label>
              <select ref="accountType" className="form-control">
                <option>Checking</option>
                <option>Savings</option>
                <option>Current</option>
              </select>
            </div>
          </div>

          <h4 className="page-header">Recipient </h4>
          <fieldset className="col-md-12">
            <div className="form-group col-md-6">
              <label> Account Name </label>
              <input ref="accountName" type="text" name="accountName" className="form-control"/>
            </div>
            <div className="form-group col-md-6">
              <label> Account accountNumber </label>
              <input ref="accountNumber" type="text" name="accountName" className="form-control"/>
            </div>
            <div className="form-group col-md-6">
              <label> Bank </label>
              <input ref="bank" type="text" name="accountName" className="form-control"/>
            </div>
            <div className="form-group col-md-6">
              <label> Branch</label>
              <input ref="branch" type="text" name="accountName" className="form-control"/>
            </div>
            <div className="form-group col-md-6">
              <label> Amount</label>
              <input ref="amount" type="text" name="accountName" className="form-control"/>
            </div>
          </fieldset>
          <div className="col-md-12">
            <div className="form-group  col-md-12">
              <input type="submit" onClick={this.transferFunds} className="col-md-6 btn btn-primary" value="Send Funds" />
            </div>
          </div>
      </div>
      );
  }
});

export default TransferFunds;
