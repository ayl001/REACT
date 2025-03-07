// filepath: src/components/Display.jsx
import React from 'react';

const calculate = (expression) => {
  try {
    // Remplacer les caractères non numériques et les opérateurs par des espaces
    const sanitizedExpression = expression.replace(/[^-()\d/*+.]/g, '');
    // Utiliser la fonction Function pour évaluer l'expression
    return new Function(`return ${sanitizedExpression}`)();
  } catch (error) {
    console.error('Invalid expression:', error);
    return 'Error';
  }
};

const Display = ({ value }) => {
  let displayValue = value;

  if (value[value.length - 1] === '=' && value.length > 1) {
    displayValue = calculate(value.slice(0, -1));
  }

  return (
    <div className="display">
      {displayValue}
    </div>
  );
};

export default Display;