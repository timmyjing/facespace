import React from 'react';


const Input = ({type, value, onChange, placeholder, errorMsg, className, name}) => {

  if (errorMsg) {
    return (
      <div class="tooltip">
        <input className={`${className}`} name={name} id="warning" type={type} value={value} onChange={onChange} placeholder={placeholder} />
        <span class="tooltiptext">{errorMsg}</span>
      </div>
    );
  } else {
    return ( <input className={`${className}`} name={name} type={type} value={value} onChange={onChange} placeholder={placeholder} /> );
  }
};

export default Input;
