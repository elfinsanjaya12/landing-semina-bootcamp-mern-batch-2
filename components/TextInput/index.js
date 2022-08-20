import React from 'react';

export default function TextInput({
  name,
  type,
  onChange,
  placeholder,
  value,
  label,
}) {
  return (
    <div className='d-flex flex-column align-items-start'>
      <label className='form-label'>{label}</label>
      <input
        type={type}
        className='form-control'
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
