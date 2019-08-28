import React from 'react'
import './App.css';
import Button from "./Components/Button/Button";
import ShowNumber from "./Components/ShowNumber/ShowNumber";

class App extends React.Component {

    state = {
        number: 0,
        buttons: [
            {buttonsTitle: '+'},
        ],
    };

    render = () => {
        return (
            <div>
                <ShowNumber number={this.state.number}/>
                <Button onClickButton={()=>{}} buttonsTitle={this.state.buttons[0].buttonsTitle}/>
            </div>
        );
    }
}

export default App;

// Побаловался
// limit: {number: 0, T: 3, B: -3, error: 'Stop'}
// onClickButton = isDone => {
//     if (isDone) {
//         this.state.number = this.state.limit.number;
//
//         if (this.state.limit.number < this.state.limit.T) {
//             this.setState({number: this.state.number + 1});
//             this.state.limit.number = this.state.limit.number + 1;
//             console.log(this.state.limit.number);
//         } else {
//             this.setState({number: this.state.limit.error});
//         }
//     } else if (!isDone) {
//         this.state.number = this.state.limit.number;
//
//         if (this.state.limit.number > this.state.limit.B) {
//             this.setState({number: this.state.number - 1});
//             this.state.limit.number = this.state.limit.number - 1;
//             console.log(this.state.limit.number);
//         } else {
//             this.setState({number: this.state.limit.error});
//         }
//     }
// };