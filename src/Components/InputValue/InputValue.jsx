import React from 'react';
import css from './InputValue.module.css';

const InputValue = props => {
    return (
        <>
            <input className={css.inputValue} type={`number`} max={``} min={``} onClick={``}></input>
        </>
    );
};

export default InputValue;