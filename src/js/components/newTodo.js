import React from 'react';

import $ from 'jquery';  



class Todo extends React.Component{
  constructor(props) {
    super(props);
    var datas=[];
    // for (var i=1;i<=10;i++){
    //           datas.push({id:i,name:'London'+i});
    //     }
    this.state = {data: datas};
    
    this.addTodo = this.addTodo.bind(this);

    this.clearTodo = this.clearTodo.bind(this);

  }

  addTodo() {
      var stateMock = this.state.data;
         

      var todo = $('#todoText')==undefined?'' :$('#todoText').val();
      if ($('#todoText')!=undefined) $('#todoText').val('');
      stateMock.push({id:Math.random(),name:todo});
      this.setState({data: stateMock});
  }
  
  clearTodo() {
     if ($('#todoText')!=undefined) $('#todoText').val('');
       var stateMock = this.state.data;
      stateMock=[];
      this.setState({data: stateMock});
  }
  
  render() {
    
    return (
      <div>
      <input type="text" id="todoText"  />
      <button style={{marginLeft: '5px'}} className='add' onClick={this.addTodo} >
              Add Todo
      </button>
      <button style={{marginLeft: '5px'}}  className='clear'onClick={this.clearTodo} >
              Clear Todos
      </button>
     <ul >
        {this.state.data.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.name}
            </li>
          );
        })}
      </ul>
      </div>
    );
  }
};
module.exports = Todo; //export the component
