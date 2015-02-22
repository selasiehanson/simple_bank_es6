'use strict'
import React from 'react'
import ReactRouter from 'react-router'
import Auth from './auth'

var Login = React.createClass({
  mixins: [ReactRouter.Navigation],

  statics: {
    attemptedTransition: null
  },

  getInitialState: function (){
      return {
        error: false
      }
  },

  handleSubmit: function (e){
    var pin =  this.refs.pin.getDOMNode().value;
    var password =  this.refs.password.getDOMNode().value;
    Auth.login(pin, password, function (loggedIn){
      if(!loggedIn) this.state.error = true;

      if(Login.attemptedTransition){
        var transition = Login.attemptedTransition;
        Login.attemptedTransition = null;
        transition.retry();
      }else {
        this.replaceWith("/home")
      }
    }.bind(this));
  },
  render : function (){
    var errors = this.state.error ? <p>Invalid Login </p> : '';
    return (
      <div className="formbox">
        <h2>Login</h2>
        <div>
          <div className="form-group">
            <label> Pin</label>
            <input ref="pin" type="text" name="pin" className="form-control"/>
          </div>
          <div className="form-group">
            <label> Password</label>
            <input type="password" ref="password" name="password" className="form-control"/>
          </div>
          <div className="form-group">
            <input type="submit" onClick={this.handleSubmit} className="btn btn-primary" value="Sign in" />
          </div>
        </div>
        { errors }
      </div>
    );
  }
});


export default Login;
