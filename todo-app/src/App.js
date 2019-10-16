import React, { useState } from 'react';
import Form from './Form'
import './App.css';

export default () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const toggleComplete = (i) => setTodos (todos.map((todo, currentLocation) => currentLocation === i ? {
    ...todo,
   complete: !todo.complete
  } :  
  todo
  
    )
  )

  return (
    <div className="App">
      <div>
         count: {count} 

         <button onClick={() => setCount(count+ 1)}>
           +
         </button>
      </div>
      <Form onSubmit={text => setTodos([{text, complete: false}, ...todos]) } />

      <div>
        {
          todos.map(({ text, complete }, i) => ( <div key={text} onClick={() => toggleComplete(i)} 
          style= {{
            textDecoration: complete ? 'line-through' : ''
          }}>
          {text}</div>
            ))
        }
      </div>
      <button onClick ={() => setTodos([])}>
        reset
      </button>

    </div>
  );
}
