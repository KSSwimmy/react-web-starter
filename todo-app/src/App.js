import React, { Component } from 'react';
//import Form from './Form'
import './App.css';


export class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: ''
    }
  }

  handleChange(event) {
    const {value} = event.target;
    //destructuring same thing as const value = event.target.value
  this.setState({newTodo: value})
  }

  handleClick(event) {
    event.preventDefault();
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({todos, newTodo: ''});
  }
 
  render() {
    return(
      <div> 
        <form> 
          <input
          onChange={this.handleChange.bind(this)} // onChange allows you to type. 
          value={this.state.newTodo} //whatever is in the input box
          type=" text" 
          placeholder= "new todo"
          /> 
          <button 
          onClick={this.handleClick.bind(this)}>create</button> 
          {/* onClick - clicking the button to make the todo show on the screen */}
        </form>
        <ul> 
          {this.state.todos.map(todo => <li>{todo}</li>)} 
          {/* lists the new todos */}
        </ul>
      </div>
    );
  }
}

export default Todo;
