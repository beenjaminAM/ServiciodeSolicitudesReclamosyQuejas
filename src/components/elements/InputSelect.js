import React, { useState } from 'react';
import Select from 'react-select';


export const InputSelect = ({ elements,  setElement}) => {

    const handleSelectChange = ( selectedOption ) => {
        setElement(selectedOption.value);
        console.log(selectedOption.value)
    }

    return (
        <div className = " InputSelect-container ">
            <Select
                options={elements}
                onChange={handleSelectChange}
                required
            />
        </div>
    )
}

export default InputSelect;
// defaultValue = { SelectUsers[0] }
//options = { DBUsers2.map(sup => ({ label: sup.name, value: sup.id })) }