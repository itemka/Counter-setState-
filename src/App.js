import React from 'react'
import './App.css';
import Button from "./Components/Button/Button";
import ShowNumber from "./Components/ShowNumber/ShowNumber";

class App extends React.Component {

    state = {
        number: 0,
        buttons: [
            {id: 1, buttonsTitle: '+'},
            {id: 2, buttonsTitle: 'Reset'},
        ],
        limit: {
            limitTop: 5,
            errorColor: false,
            errorEnd: false,
            errorEndText: 'Stop'
        },
    };

    onClickPlusNumber = () => {
        if (this.state.number < this.state.limit.limitTop) {

            this.setState({
                number: this.state.number + 1,
                limit: {...this.state.limit, errorColor: false, errorEnd: false}
            })

        } else if (this.state.number === this.state.limit.limitTop) {

            this.setState({limit: {...this.state.limit, errorColor: true, errorEnd: false}})

        } else if (this.state.number > this.state.limit.limitTop) {

            this.setState({limit: {...this.state.limit, errorColor: false, errorEnd: true}});
        }
    };

    onClickReset = () => {
        this.setState({number: 0, limit: {...this.state.limit, errorColor: false, errorEnd: false}})
    };

    render = () => {
        return (
            <div className={`generalBlock`}>
                <div className={`bloks`}>
                    <div>
                        <div className={`content`}>
                            <div>
                                <ShowNumber limit={this.state.limit} number={this.state.number}/>
                            </div>
                        </div>
                        <div className={`interfaceManagement`}>
                            <Button onClickButton={() => this.onClickReset()}
                                    buttonsTitle={this.state.buttons[1].buttonsTitle}/>
                        </div>
                    </div>
                </div>
                <div className={`bloks`}>
                    <div>
                        <div className={`content`}>
                            <div>
                                <ShowNumber limit={this.state.limit} number={this.state.number}/>
                            </div>
                        </div>
                        <div className={`interfaceManagement`}>
                            <Button onClickButton={() => this.onClickPlusNumber()}
                                    buttonsTitle={this.state.buttons[0].buttonsTitle}/>
                            <Button onClickButton={() => this.onClickReset()}
                                    buttonsTitle={this.state.buttons[1].buttonsTitle}/>
                        </div>
                    </div>
                </div>
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