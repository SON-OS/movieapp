import React from 'react';

const FileInput = ({ label, onChange, error }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="file" accept="image/*" onChange={onChange} />
      {error && <div>{error}</div>}
    </div>
  );
};

export default FileInput;