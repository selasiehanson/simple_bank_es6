'use strict'
import React from 'react'

var NewAccount = React.createClass({
  render : function (){
    return (
      <div className="formbox">
        <h2>New Account</h2>
        <form id="form_id" action="/login" method="post">
          <div className="form-group">
              <label> First name</label>
              <input type="text" name="firstName" className="form-control" />
          </div>
          <div className="form-group">
            <label> Last name</label>
            <input type="text" name="lastName" className="form-control" />
          </div>
          <div className="form-group">
            <label> Date of birth</label>
            <input type="text" name="dateOfBirth" className="form-control" />
          </div>
          <div className="form-group">
            <label> Phone Number</label>
            <input type="text" name="phoneNumber" className="form-control" />
          </div>
          <div className="form-group">
            <label> Social security no.</label>
            <input type="text" name="snnitNumber" className="form-control" />
          </div>
          <div className="form-group">
            <label> Occupation</label>
            <input type="text" name="occupation" className="form-control" />
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-primary" value="Sign in" />
          </div>
        </form>
      </div>
    );
  }
});

export default NewAccount;
