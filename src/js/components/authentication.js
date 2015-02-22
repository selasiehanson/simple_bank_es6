import Auth from "./auth"
import Login from "./login"

var Authentication = {
  statics: {
    willTransitionTo: function (transition){
      if(!Auth.loggedIn()){
        Login.attemptedTransition = transition;
        transition.redirect('/signin')
      }
    }
  }
}


export default Authentication;
