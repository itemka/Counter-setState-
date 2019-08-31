import React from 'react';
import css from './InputValue.module.css';

const InputValue = props => {

    let onChangeInput = (e) => {
        props.onChangeInput(e);
    };

    return (
        <>
            <input type={`number`} className={css.inputValue} onChange={()=>onChangeInput()}/>
        </>
    );
};

export default InputValue;