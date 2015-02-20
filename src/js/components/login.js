'use strict'
import React from 'react'
var Login = React.createClass({
  getInititalState: function (){
      return {
        pin: "oldpin",
        password: "oldpass"
      }
  },
  handlePin: function(e){
    this.setState({pin: e.target.value})
  },
  handlePassword: function(e){
    this.setState({password: e.target.value})
  },
  handleSubmit: function (e){
    alert(this.state.pin + "  "+this.state.password);
    e.preventDefault();
    return false;
  },
  render : function (){
    return (
      <div className="formbox">
        <h2>Login</h2>
        <div>
          <div className="form-group">
              <label> Pin</label>
              <input type="text" name="pin" className="form-control" onChange={this.handlePin}/>
          </div>
          <div className="form-group">
            <label> Password</label>
            <input type="password" name="password" className="form-control" onChange={this.handlePassword}/>
          </div>
          <div className="form-group">
            <input onClick={this.handleSubmit} type="submit" className="btn btn-primary" value="Sign in" />
          </div>
        </div>
      </div>
    );
  }
});


export default Login;
