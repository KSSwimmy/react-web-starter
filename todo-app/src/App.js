import React, { useState } from 'react';
import Form from './Form'
import './App.css';

export default () => {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState([]);

  return (
    <div className="App">
      <div>
         count: {count} 

         <button onClick={() => setCount(count+ 1)}>
           +
         </button>
      </div>
      <Form onSubmit={text => setTodo([{text, complete: false}, ...todo]) } />

      <div>
        {
          todo.map(({ text }) => ( <div key={text}>{text}</div>
            ))
        }
      </div>

    </div>
  );
}
