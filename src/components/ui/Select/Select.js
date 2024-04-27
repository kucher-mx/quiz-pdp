import React from 'react';
import './Select.css';

export default props => {
  const htmlFor = `${props.label}-${Math.random()}`;
  return (
    <div className={'Select'}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <select id={htmlFor} onChange={props.onChange} value={props.value}>
        {props.options.map(option => {
          return (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          );
        })}
      </select>
    </div>
  );
};
