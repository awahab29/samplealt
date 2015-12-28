var alt = require('../alt');

class TodoActions { //defining an actions class
  
  //defining an action that accepts a payload and dispatches it to is its attached store's callbacks
  addTodo(todo) { 
    this.dispatch(todo); 
  }

  //defining an action for clearing todos. This doesnt requires any payload
  clearTodo(){
  	this.dispatch();
  }

}

module.exports = alt.createActions(TodoActions); //exporting the created actions by alt