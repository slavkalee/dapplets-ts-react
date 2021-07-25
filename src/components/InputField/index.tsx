import React from 'react';
import './InputField.scss';

interface Props {
  label: string;
  buttonName: string;
  placeholder: string;
}

const InputField: React.FC<Props> = ({ label, buttonName, placeholder }) => {
  return (
    <div className="input-field">
      <label className="input-field__label">{label}</label>
      <div className="input-field__row">
        <input
          type="text"
          className="input-field__control"
          placeholder={placeholder}
        />
        <button className="btn btn-submit btn-primary">{buttonName}</button>
      </div>
    </div>
  );
};

export default InputField;
