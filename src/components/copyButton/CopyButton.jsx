import React from 'react';
import cl from './copyButton.module.css'

const CopyButton = (props) => {
    return (
       <button className={cl.copyButton} onClick={props.copy} ></button>
    );
};

export default CopyButton;