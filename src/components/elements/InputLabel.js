import React, { useState } from 'react';


const InputLabel = ({ labelText, inputId, inputValue, setInputValue }) => {

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <label htmlFor={inputId}>{labelText}</label>
      <input
        type="text"
        id={inputId}
        value={inputValue}
        onChange={handleInputChange}
        required
      />
    </>
  );
};

export default InputLabel;
