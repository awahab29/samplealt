var React = require('react');
var AltContainer = require('alt/AltContainer');
var TodoStore = require('../stores/TodoStore');
var TodoActions = require('../actions/TodoActions');
var $ = require('jquery');  

var Todos = React.createClass({ // creating a parent component that defines and alt container component

  render() {
    return (
      <div className='six'>
        <h2>Todos Page</h2>
        
        <AltContainer store={TodoStore}>
          <TodoComponent />
        </AltContainer>

      </div>
    );
  }
});

module.exports = Todos; //export the component

var TodoComponent = React.createClass({
  addTodo() {
      var todo = $('#todoText').val();
      TodoActions.addTodo(todo);

      $('#todoText').val('');
  },
  clearTodo() {
      $('#todoText').val('');
      TodoActions.clearTodo();
  },
  render() {
    if (this.props.errorMessage) {
      return (
        <div>{this.props.errorMessage}</div>
      );
    }
    return (
      <div>
      <input type="text" id="todoText"  />
      <button style={{marginLeft: '5px'}} onClick={this.addTodo} >
              Add Todo
      </button>
      <button style={{marginLeft: '5px'}} onClick={this.clearTodo} >
              Clear Todos
      </button>
      <ul>
        {this.props.todos.map((todo, i) => {
          return (
            <li key={i}>
              {todo}
            </li>
          );
        })}
      </ul>
      </div>
    );
  }
});
