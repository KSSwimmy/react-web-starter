 import React, { useState } from 'react';


 const useInputValue = initialValue => {
   const [value, setValue] = useState(initialValue);

   return {
     value,
     onChange: event => setValue(event.target.value)
   };
 };

 export default ({onSubmit}) => {
   const text = useInputValue('');
   

  return (
   <form onSubmit={event => {
     event.preventDefault();
     onSubmit(text.value)
  }} > 

 <input 
    {...text} 
    placeholder = 'text'
 /> 

   </form>
)

 }

 // functionality 