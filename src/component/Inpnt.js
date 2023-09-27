import React from 'react';

const Input= ({ label, type, value, onChange, error }) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} />
      {error && <div>{error}</div>}
    </div>
  );
};

export default Input;