import React from 'react'
import './App.css';
import Button from "./Components/Button/Button";
import ShowNumber from "./Components/ShowNumber/ShowNumber";
import InputValue from "./Components/InputValue/InputValue";

class App extends React.Component {

    state = {
        counter: 0,
        buttons: [
            {id: 1, buttonsTitle: '+'},
            {id: 2, buttonsTitle: 'Reset'},
            {id: 3, buttonsTitle: 'Settings'},
        ],
        limit: {
            startValue: 0,
            maxValue: 5,
            errorColor: false,
            errorEnd: false,
            errorEndText: 'Stop'
        },
    };

    onClickPlusNumber = () => {
        if (this.state.counter < this.state.limit.maxValue) {

            this.setState({
                counter: this.state.counter + 1,
                limit: {...this.state.limit, errorColor: false, errorEnd: false}
            })

        } else if (this.state.counter === this.state.limit.maxValue) {

            this.setState({limit: {...this.state.limit, errorColor: true, errorEnd: false}})

        } else if (this.state.counter >= this.state.limit.maxValue) {

            this.setState({
                counter: this.state.limit.errorEndText,
                limit: {...this.state.limit, errorColor: false, errorEnd: true}
            });
        }
    };

    onClickReset = () => {
        this.setState({counter: 0, limit: {...this.state.limit, errorColor: false, errorEnd: false}})
    };

    onClickSettings = () => {

    };


    onChangeInputMaxValue = (value) => {
        this.setState({limit: {...this.state.limit, maxValue: value.currentTarget.value} });
    };
    onChangeInputStartValue = (value) => {
        this.setState({limit: {...this.state.limit, startValue: value.currentTarget.value} });
    };


    render = () => {
        return (
            <div className={`generalBlock`}>
                <div className={`bloks`}>
                    <div>
                        <div className={`content`}>
                            <div className={`contentLine`}>
                                <div>Max value</div>
                                <InputValue onChangeInput={() => this.onChangeInputMaxValue}/>
                            </div>
                            <div className={`contentLine`}>
                                <div>Start value</div>
                                <InputValue onChangeInput={() => this.onChangeInputStartValue}/>
                            </div>
                        </div>
                        <div className={`interfaceManagement`}>
                            <Button onClickButton={() => this.onClickReset()}
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