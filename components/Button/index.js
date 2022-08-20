import React from 'react';

export default function Button({ action, children, variant }) {
  return (
    <button type='button' className={variant} onClick={action}>
      {children}
    </button>
  );
}
