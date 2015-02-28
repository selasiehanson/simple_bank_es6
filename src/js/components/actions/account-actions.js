import McFly from 'mcfly'

var Flux =  new McFly();

export default Flux.createActions({
  loadClients: function(){
    return {
      actionType: "LOAD_CLIENTS"
    }
  },
  addClient: function (data){
    return {
      actionType: "ADD_CLIENT",
      data: data
    }
  },
  updateClient: function (data){
    return {
      actionType: "UPDATE_CLIENT",
      data: data
    }
  },
  deleteClient: function (id){
    return {
      actionType: "DELETE_CLIENT",
      id: id
    }
  }
});
