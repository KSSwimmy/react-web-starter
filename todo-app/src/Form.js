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
   const email = useInputValue('')

  return (
   <div> 

 <input {...text} 
 placeholder = 'text'
 /> 
 <input {...email} /> 

   </div>
)

 }