import React, { useState } from 'react';
import Form from './Form'
import './App.css';

export default () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
         count: {count} 

         <button onClick={() => setCount(count+ 1)}>
           +
         </button>
      </div>
      <Form /> 
    </div>
  );
}
