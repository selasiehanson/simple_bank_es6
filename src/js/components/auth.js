function prentendRequest(pin, password, cb){
  setTimeout(function (){
    if(pin === "pin" && password === 'pass'){
      cb({
        authenticated: true,
        token: Math.random().toString(36).substring(7)
      });
    }else {
      cb({authenticated: false});
    }
  },0);
}

var Auth = {
    login: function (pin, password, cb){

      if(localStorage.token){
        if(cb) cb(true)
        this.onChange(true);
        return;
      }

      prentendRequest(pin, password, function (res){
        if(res.authenticated){
          localStorage.token = res.token;
          if(cb) cb(true);
          this.onChange(true);
        }else {
          if(cb) cb(false)
          this.onChange(false)
        }
      }.bind(this));
    },
    getToken: function (){
      return localStorage.token;
    },
    logout: function (cb){
      delete localStorage.token;
      if(cb) cb();
      this.onChange(false);
    },
    loggedIn: function (){
      return !!localStorage.token;
    },
    onChange: function(){

    }

}

export default Auth;
