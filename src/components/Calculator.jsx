import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';
import './Calculator.css';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('');

  const handleButtonClick = (label) => {
    if (label === 'C') {
      setDisplayValue('');
    } else if (label === '=') {
      try {
        setDisplayValue(eval(displayValue).toString());
      } catch (error) {
        setDisplayValue('Error');
      }
    } else {
      setDisplayValue(displayValue + label);
    }
  };

  return (
    <div className="calculator">
      <Display value={displayValue} />
      <div className="buttons">
        {['(', ')', '%', 'C', '7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map((label) => (
          <Button key={label} label={label} onClick={() => handleButtonClick(label)} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;