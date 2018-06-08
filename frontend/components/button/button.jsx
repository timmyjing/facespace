import React from 'react';

const Button = ({onClick, label}) => (
  <button className="grey-button" onClick={onClick}>{label}</button>
);

export default Button;
