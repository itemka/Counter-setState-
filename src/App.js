import React from 'react'
import './App.css';
import Button from "./Components/Button/Button";
import ShowNumber from "./Components/ShowNumber/ShowNumber";
import InputValue from "./Components/InputValue/InputValue";

class App extends React.Component {
    constructor(props){
        super(props);
    }
    state = {
        counter: 0,
        buttons: [
            {id: 1, buttonsTitle: '+'},
            {id: 2, buttonsTitle: 'Reset'},
            {id: 3, buttonsTitle: 'Settings'},
        ],
        limit: {
            startValue: 0,
            maxValue: 1,
            errorColorStart: false,
            errorColorMax: false,
            errorEnd: false,
            errorEndText: 'Stop'
        },
    };

    onClickPlusNumber = () => {
        if (this.state.counter < this.state.limit.maxValue) {

            this.setState({
                counter: this.state.counter + 1,
                limit: {...this.state.limit, errorColorStart: false, errorColorMax: false, errorEnd: false}
            });
            console.log(this.state.counter)

        } else if (this.state.counter === this.state.limit.maxValue) {

            this.setState({limit: {...this.state.limit, errorEnd: false}})

        } else if (this.state.counter >= this.state.limit.maxValue) {

            this.setState({
                counter: this.state.limit.errorEndText,
                limit: {...this.state.limit, errorEnd: true}
            });
        }
    };

    onClickReset = () => { this.setState({counter: this.state.limit.startValue}) };

    onClickSettings = () => {
        this.setState({counter: this.state.limit.startValue});
    };


    onChangeInputMaxValue = (event) => {
        if (this.state.limit.maxValue <= this.state.limit.startValue) {
            this.setState(
                {limit: {...this.state.limit, maxValue: event}},
                () => this.state.limit.errorColorMax = true);
        } else {
            this.setState({
                limit: {
                    ...this.state.limit,
                    maxValue: event
                }
            }, () => this.state.limit.errorColorMax = false);
        }
        console.log(event);
    };

    onChangeInputStartValue = (event) => {
        if ((this.state.limit.startValue < 0) || (this.state.limit.startValue >= this.state.limit.maxValue)) {
            this.setState({limit: {...this.state.limit, startValue: event, errorColorStart: true}});
        } else {
            this.setState({limit: {...this.state.limit, startValue: event, errorColorStart: false}});
        }
        console.log(event);
    };


    render = () => {
        return (
            <div className={`generalBlock`}>
                <div className={`bloks`}>
                    <div>
                        <div className={`content`}>
                            <div className={`contentLine`}>
                                <div>Max value</div>
                                <InputValue errorColor={this.state.limit.errorColorMax}
                                            value={this.state.limit.maxValue}
                                            onChangeInput={this.onChangeInputMaxValue.bind(this.state)}/>
                            </div>
                            <div className={`contentLine`}>
                                <div>Start value</div>
                                <InputValue errorColor={this.state.limit.errorColorStart}
                                            value={this.state.limit.startValue}
                                            onChangeInput={this.onChangeInputStartValue.bind(this.state)}/>
                            </div>
                        </div>
                        <div className={`interfaceManagement`}>
                            <Button onClickButton={this.onClickSettings.bind(this.state)}
                                    buttonsTitle={this.state.buttons[2].buttonsTitle}/>
                        </div>
                    </div>
                </div>
                <div className={`bloks`}>
                    <div>
                        <div className={`content`}>
                            <div>
                                <ShowNumber limit={this.state.limit} counter={this.state.counter}/>
                            </div>
                        </div>
                        <div className={`interfaceManagement`}>
                            <Button onClickButton={this.onClickPlusNumber.bind(this.state)}
                                    buttonsTitle={this.state.buttons[0].buttonsTitle}/>
                            <Button onClickButton={this.onClickReset.bind(this.state)}
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