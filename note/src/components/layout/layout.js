import React from 'react';

export default function ({children, className = '', style = {}}) {
  return (
    <div className={`AppLayout ${className}`} style={style}>
      {children}
    </div>
  );
}