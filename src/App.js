import React from 'react'
import './App.css';
import Display from "./Components/Display";
import Buttons from "./Components/Buttons";

class App extends React.Component {

    state = {
        number: 0,
        buttons: [
            {title: '+', isDone: true},
            {title: '-', isDone: false},
        ],
        limit: {number: 0, T: 3, B: -3, error: 'Stop'}
    };

    onClickButtonsPlusMinus = isDone => {
        if (isDone) {
            this.state.number = this.state.limit.number;

            if (this.state.limit.number < this.state.limit.T) {
                this.setState({number: this.state.number + 1});
                this.state.limit.number = this.state.limit.number + 1;
                console.log(this.state.limit.number);
            } else {
                this.setState({number: this.state.limit.error});
            }
        } else if (!isDone) {
            this.state.number = this.state.limit.number;

            if (this.state.limit.number > this.state.limit.B) {
                this.setState({number: this.state.number - 1});
                this.state.limit.number = this.state.limit.number - 1;
                console.log(this.state.limit.number);
            } else {
                this.setState({number: this.state.limit.error});
            }
        }
    };

    render = () => {
        return (
            <div>
                <Display number={this.state.number}/>
                <Buttons onClickButtonsPlusMinus={this.onClickButtonsPlusMinus} buttons={this.state.buttons}/>
            </div>
        );
    }
}

export default App;

