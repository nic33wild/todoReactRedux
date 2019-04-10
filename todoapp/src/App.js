import React, { Component } from 'react';
import Todos from './Todos';
import AddForm from './AddForm';

class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      todos: [
        {id: 1, content: 'Practice React and Redux'},
        {id: 2, content: 'Have fun'}
      ]
    }
    this.deleteTodo = this.deleteTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }
  

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })

  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">
          Checklist
        </h1>
        <AddForm addTodo={this.addTodo} />
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
