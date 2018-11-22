import React from 'react';

/**
 * 创建全局的Context
 */
const Context = React.createContext();
const {Provider, Consumer} = Context;
export {Provider, Consumer};