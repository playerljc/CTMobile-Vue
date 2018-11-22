import React from 'react';

export default function ({children, className = '', style = {}}) {
  return (
    <div className={`AppFooter ${className}`} style={style}>
      {children}
    </div>
  );
}