import React from 'react'
import css from './ShowNumber.module.css';

const ShowNumber = props => {
    let styleNumber = props.limit.errorColor === true ? `${css.colorNumberEnd}` : `${css.colorNumberOk}`;
    return (
        <div className={styleNumber}>
            {props.number}
        </div>
    );
};

export default ShowNumber;