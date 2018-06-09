import React from 'react';
import {Link} from 'react-router-dom';

const Input = ({type, value, onChange, placeholder, errorMsg, className, name}) => {

  if (errorMsg) {
    return (
      <div class="tooltip">
        <input className={`${className}`} name={name} id="warning" type={type} value={value} onChange={onChange} placeholder={placeholder} />
        <span class="tooltiptext">{errorMsg} <a className="nice-try" href="https://www.youtube.com/watch?v=1lbYHw-MHSo">Nice Try</a>.</span>
      </div>
    );
  } else {
    return ( <input className={`${className}`} name={name} type={type} value={value} onChange={onChange} placeholder={placeholder} /> );
  }
};

export default Input;
