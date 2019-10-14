import React, { useState } from 'react';
import useInputValue from './useInputValue'


export default () => {
    const text = useInputValue('')


    return (
        <form onSubmit={event => {event.preventDefult()}}>
            
            <input 
            {...text}
            /> 

            <useInputValue />

        </form> 

        
    )}