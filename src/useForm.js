import React, { useState } from 'react'

export const useForm = (initialState = {}) => {

    const [values, setValue] = useState(initialState)

    const handleInputChange = ({target})=>{
        //console.log(target)
        //console.log(target.name)
        //console.log(target.value)
        console.log({...values});
        console.log(values);
        setValue({
            ...values,
            [target.name]:target.value
        })
    };

    return[
        values , handleInputChange
    ];
}
