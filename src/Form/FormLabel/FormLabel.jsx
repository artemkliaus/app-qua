import React from 'react';
import './FormLabel.css';

const FormLabel = ({ label, required }) => {
  return (
    <p className="formName">
      {label}
      {!!required && <sup className="formNameSup">*</sup>}
    </p>
  )
};

export default FormLabel;
