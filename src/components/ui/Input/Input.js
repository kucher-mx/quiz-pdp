import React from 'react';
import './Input.css';

function isInvalid({ valid, shouldValidate, touched }) {
  return !valid && shouldValidate && touched;
}

export default props => {
  const inputType = props.type || 'text';
  const htmlFor = `${inputType}-${Math.random()}`;
  const inputClasses = ['Input'];

  if (isInvalid(props)) {
    inputClasses.push('invalid');
  }

  return (
    <div className={inputClasses.join(' ')}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <input type={inputType} id={htmlFor} onChange={props.onChange} value={props.value} />
      {isInvalid(props) ? <span>{props.errorMessage || 'Control is invalid'}</span> : null}
    </div>
  );
};
