import React from 'react';
import './Forminput.css'; 


function FormInput({ label, id, type, value, onChange, placeholder, required }) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}{required && ' *'}</label>
      <input
        type={type}
        id={id}
        name={id} 
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}

export default FormInput;