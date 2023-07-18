import React from 'react';
import './Button.css';

const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} disabled={!children} className="loader-button">
      {children}
    </button>
  );
};

export default Button;
