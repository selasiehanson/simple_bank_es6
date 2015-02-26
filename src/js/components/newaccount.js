'use strict'
import React from 'react'

var NewAccount = React.createClass({
  render : function (){
    return (
      <div className="container-fluid">
        <div className="page-header"> <h2> Create new account </h2> </div>
          <fieldset className="col-md-12">
            <form id="form_id" action="/login" method="post">
              <div className="form-group col-md-6">
                  <label> First name</label>
                  <input type="text" name="firstName" className="form-control" />
              </div>
              <div className="form-group col-md-6">
                <label> Last name</label>
                <input type="text" name="lastName" className="form-control" />
              </div>
              <div className="form-group col-md-6">
                <label> Date of birth</label>
                <input type="text" name="dateOfBirth" className="form-control" />
              </div>
              <div className="form-group col-md-6">
                <label> Phone Number</label>
                <input type="text" name="phoneNumber" className="form-control" />
              </div>
              <div className="form-group col-md-6">
                <label> Social security no.</label>
                <input type="text" name="snnitNumber" className="form-control" />
              </div>
              <div className="form-group col-md-6">
                <label> Occupation</label>
                <input type="text" name="occupation" className="form-control" />
              </div>
              <div className="form-group col-md-6">
                <input type="submit" className="btn btn-primary" value="Sign up" />
              </div>
            </form>
          </fieldset>
      </div>
    );
  }
});

export default NewAccount;
