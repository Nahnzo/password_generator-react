import React from 'react';
import  cl from './checkSymbols.module.css'

const CheckSymbols = (props) => {
    return (
        <input type='checkbox' className={cl.symbols} checked={props.checked} onChange={props.change}/>
    );
};

export default CheckSymbols;