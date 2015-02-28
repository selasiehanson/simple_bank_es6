'use strict'
import React from 'react'

var AccountsHistory = React.createClass({
  getInitialState: function (){
      return {
        details : [{
          date: (new Date()).toString(),
          transactionBy: "Kofi Small",
          transactionType: "Withdrawal",
          amount: 4000
        }]
      }
  },
  render: function (){
    var rows = this.state.details.map(function (detail, idx){
      return (
        <tr>
          <td className="ax-grid-action-1"> {idx + 1}. </td>
          <td> {detail.date} </td>
          <td> {detail.transactionType} </td>
          <td> {detail.transactionBy} </td>
          <td> {detail.amount} </td>
        </tr>
      );
    });
    return(
      <div>
        <div className="page-header"> <h2> Accounts History </h2> </div>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Transaction Type</th>
              <th>Transaction By</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
             {rows}
          </tbody>
        </table>
      </div>
    );
  }
});

export default AccountsHistory;
