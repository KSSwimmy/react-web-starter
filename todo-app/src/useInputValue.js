import React, { useState } from 'react';

export default () => {
const useInputValue = initialValue => {
    const [ value, setValue] = useState(initialValue);

    return {
        value, 
        onChange: event => setValue(event.target)
        };
    };
};