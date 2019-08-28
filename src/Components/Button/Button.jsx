import React from 'react';

class Button extends React.Component {
    render() {
        return (
            <>
                <button onClick={() => this.props.onClickButton()}>{this.props.buttonsTitle}</button>
            </>
        )
    }
};

export default Button;
