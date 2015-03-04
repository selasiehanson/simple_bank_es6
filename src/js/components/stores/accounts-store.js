'use strict'

import McFly from 'mcfly'
import reqwest from 'jquery'
import _ from 'lodash'

var Flux = new McFly();

var _all = [];
var _current = {};

var url = '/api/accounts'

let refreshStore = (data) => {
  _all = data || [];
}

let insertIntoStore = (client) =>{

  var found = _.find(_all, (cl) => cl.id === client.id)

  if(!found){
     _all.push(client);
  }else {
    found = client
  }

  _current = client
}

let setCurrent = (client) => {
  _current = client
}

let loadClients = () => {
  reqwest.ajax({
    url: url,
    contentType: 'application/json'
  }).then((res) => {
    refreshStore(res)
    AccountsStore.emitChange();
  });
}

let getClient = (id) =>{
  var client = _.find(_all,  cl => cl.id === id);

  if(client){
    setCurrent(client);
    AccountsStore.emitChange();
  }else {
    //go to server and pick
    var _url = `${url}/${id}`;
    reqwest.ajax({
      url: _url,
      contentType: 'application/json'
    }).then((res) => {
      insertIntoStore(res)
      AccountsStore.emitChange();
    });
  }

}

let createOrUpdate = (data, isUpdate) => {
  var _method = isUpdate ? 'put' : 'post';
  if(isUpdate) {
    url = `${url}/${data.id}`
  }

  reqwest.ajax({
    url: url,
    type: 'json',
    method: _method,
    contentType: 'application/json',
    data: JSON.stringify(data)
  }).then( (res) => {
      insertIntoStore(res);
      AccountsStore.emitChange();
  });
}

let createClientAccount = (data) => {
  createOrUpdate(data);
}

let updateClientAccount = (data) => {
  createOrUpdate(data, true);
}

let removeFromStore = (id) => {
  _.remove(_all, (client) => client.id === id );
}

let deleteClient = (id)=> {
  reqwest.ajax({
    url: `${url}/${id}`,
    type: 'json',
    method: 'delete',
    contentType: 'application/json',
  }).then( (res) => {
      removeFromStore(id);
      AccountsStore.emitChange();
  });
}

var AccountsStore = Flux.createStore({
  all: () => {
    return _all;
  },
  getSelected: () => _current
}, (payload) => {
  switch(payload.actionType){
    case "LOAD_CLIENTS":
      loadClients();
      break;
    case "GET_CLIENT":
      console.log(`getting client with id ${payload.id}`)
      getClient(payload.id);
      break;
    case "ADD_CLIENT":
      createClientAccount(payload.data);
      break;
    case "UPDATE_CLIENT":
      updateClientAccount(payload.data);
      break;
    case "DELETE_CLIENT":
      deleteClient(payload.id);
      break;
  }
});


export default AccountsStore;
