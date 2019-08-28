import React from 'react'

class Button extends React.Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.onClickButtonsPlusMinus(this.props.isDone)}>
                    {this.props.title}
                </button>
            </div>
        )
    }
}

export default Button;