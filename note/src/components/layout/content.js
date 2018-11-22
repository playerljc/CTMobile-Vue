import React from 'react';

export default function ({children, className = '', style = {}}) {
  return (
    <div className={`AppContent ${className}`} style={style}>
      {children}
    </div>
  );
}