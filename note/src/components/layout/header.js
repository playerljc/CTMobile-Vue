import React from 'react';

export default function ({children, className = '', style = {}}) {
  return (
    <div className={`AppHeader ${className}`} style={style}>
      {children}
    </div>
  );
}