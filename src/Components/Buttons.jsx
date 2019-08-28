import React from 'react'
import Button from "./Button";

class Buttons extends React.Component {
    render() {
        let buttons = this.props.buttons.map(item => <Button title={item.title} isDone={item.isDone}
                                                             onClickButtonsPlusMinus={this.props.onClickButtonsPlusMinus}/>);
        return (
            <div>
                {buttons}
            </div>
        )
    }
}

export default Buttons;