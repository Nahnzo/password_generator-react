import React from 'react';
import cl from './myButton.module.css'

const MyButton = (props) => {
    return (
       <button disabled={props.password !== '' ? true : false} className={cl.myButton} onClick={props.setPassword}>Generate</button>
    );
};

export default MyButton;