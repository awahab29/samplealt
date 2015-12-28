var alt = require('../alt');
var TodoActions = require('../actions/TodoActions');

class TodoStore {

  constructor() {

    this.todos = []; // every class member defines inside stores wil be treated as stores state data

    this.bindListeners({  //binding the actions to their respective callbacks of store
      onAddTodo: TodoActions.addTodo,
      onClearTodo: TodoActions.clearTodo
    });
  }

  onAddTodo(todo){  //callback of adding todo
    this.todos.push(todo); //push the coming payload of todo to the todos state variable
  }

  onClearTodo(){ //callback of clearing todo
    this.todos = []; // clearing the todos array here
  }

}

module.exports = alt.createStore(TodoStore, 'TodoStore');
