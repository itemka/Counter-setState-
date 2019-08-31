import React from 'react';
import css from './Button.module.css';

const Button = props => {
    return (
        <>
            <button className={css.buttons} onClick={props.onClickButton}>{props.buttonsTitle}</button>
        </>
    );
};

export default Button;