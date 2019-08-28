import React from 'react';

const Button = props => {
    return (
        <>
            <button onClick={props.onClickButton}>{props.buttonsTitle}</button>
        </>
    );
};

export default Button;