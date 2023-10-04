import React from 'react'

const foodContext = React.createContext({});
const dispContext = React.createContext();
const foodListContext = React.createContext();

export default foodContext;
export {dispContext,foodListContext};