var alt = require('../alt');
var TodoActions = require('../actions/TodoActions');
var $ = require('jquery');

class TodoStore {
  constructor() {
    this.todos = [];

    this.bindActions(TodoActions);
  }

  onAddTodo(){
		this.todos.push($('#todoText').val());
    $('#todoText').val('');
  }

  onClearTodo(){
    this.todos = [];
    $('#todoText').val('');
  }

}

module.exports = alt.createStore(TodoStore, 'TodoStore');
