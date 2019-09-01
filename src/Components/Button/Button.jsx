import React from 'react';
import css from './Button.module.css';

const Button = props => {
    let disabledButtonCSS = props.access === false ? `${css.disabledButton}` : ``;
    let disabledButton = props.access === false ? `disabled` : ``;
    return (
        <>
            <button className={`${css.buttons} ${disabledButtonCSS}`}
                    onClick={() => props.onClickButton()} disabled={disabledButton}>
                {props.buttonsTitle}
            </button>
        </>
    );
};

export default Button;