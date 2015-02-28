'use strict'

import McFly from 'mcfly'
import reqwest from 'jquery'


var Flux = new McFly();

var _all = [];

var url = '/api/accounts'

function loadClients(){
  reqwest.ajax({
    url: url,
    contentType: 'application/json'
  }).then(function (res){
    _all = res;
    AccountsStore.emitChange();
  });
}

function createClientAccount(data){
  reqwest.ajax({
    url: url,
    type: 'json',
    method: 'post',
    contentType: 'application/json',
    data: JSON.stringify(data)
  }).then(function (res){
      _all.push(res);
      AccountsStore.emitChange();
  });
}

var AccountsStore = Flux.createStore({
  all: function (){
    return _all;
  }
},function (payload){
  switch(payload.actionType){
    case "LOAD_CLIENTS":
      loadClients();
      break;
    case "ADD_CLIENT":
      console.log("adding client")
      createClientAccount(payload.data);
      break;
    case "UPDATE_CLIENT":
      console.log("adding client")
      break;
    case "DELETE_CLIENT":
      console.log("adding client")
      break;
  }
});


export default AccountsStore;
