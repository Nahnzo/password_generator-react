import React from 'react';
import cl from './Check.module.css'

const CheckCapital = (props) => {
    return (
        <input type='checkbox' checked={props.checked} className={cl.capital}  onChange={props.change}/>
    );
};

export default CheckCapital;