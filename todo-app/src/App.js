import React, { Component } from 'react';
//import Form from './Form'
import './App.css';


export class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: '' // allows us to keep track of that state of the input
    }
  }

  handleChange(event) {
    const {value} = event.target;
    //destructuring same thing as const value = event.target.value
  this.setState({newTodo: value})
  }

  handleClick(event) {
    event.preventDefault(); //because we're using a form we're using preventDefault 
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({todos, newTodo: ''}); // this is updating the todos state with the newTodo state
  }

  removeTodo(i) {
    const todos = [...this.state.todos.slice(0,i), this.state.todos.slice(i + 1)]
    this.setState({todos});
  }
 
  render() {
    return(
      <div> 
        <form> 
          {/* form allows the use of the enter button */}
          <input
          onChange={this.handleChange.bind(this)} // onChange allows you to type (updates the input box). Without it the value is always going to be set to whatever the state is. In case it is an empty string. (It won't change)
          value={this.state.newTodo} //whatever is in the input box
          type=" text" 
          placeholder= "new todo"
          /> 
          <button 
          onClick={this.handleClick.bind(this)}>create</button> 
          {/* onClick - clicking the button to make the todo show on the screen. Adds that new todo to our todos collection */}
        </form>
        <ul> 
          {this.state.todos.map((todo, i) => (
          <li onClick={() => this.removeTodo.call(this, i)}>{todo}</li>))} 
        </ul>
        {/* lists the new todos */}
      </div>
    );
  }
}

export default Todo;
