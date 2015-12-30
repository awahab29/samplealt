var React = require('react');
var AltContainer = require('alt/AltContainer');
var TodoStore = require('../stores/TodoStore');
var TodoActions = require('../actions/TodoActions');
var $ = require('jquery');  

var Todos = React.createClass({ // creating a parent component that defines and alt container component

  render() {
    return (
      <div className='six'>
        <h4>Todos Page</h4>
        
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

    return (
      <div>
      <input type="text" id="todoText"  />
      <button style={{marginLeft: '5px'}} onClick={this.addTodo}  className="waves-effect waves-light btn">
              Add Todo
      </button>
      <button style={{marginLeft: '5px'}} onClick={this.clearTodo}  className="waves-effect waves-light btn" >
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
