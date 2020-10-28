import React, { Component } from 'react';
import Number from './Number/Number';
import Operator from './Operator/Operator';
import './App.css';

class App extends Component {
  state = {
    numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    operators: ['+', '-', '*', '/', '='],
    firstArgument: '',
    secondArgument: '',
    operator: '',
    result: null,
  }

  clickNumberHandler = (event) => {
    let selectedNum = event.target.firstChild.textContent;
    let operatorLngth = this.state.operator.length;

    if (operatorLngth > 0) {
      let input = this.state.secondArgument;

      let updatedInput = input.concat(selectedNum);

      this.setState((prevState) => {
        return {
          ...prevState,
          secondArgument: updatedInput,
        }

      })
    } else {
      let input = this.state.firstArgument;
      let updatedInput = input.concat(selectedNum);

      this.setState((prevState) => {
        return {
          ...prevState,
          firstArgument: updatedInput
        }

      })
    }
  }

  clickOperatorHandler = (event) => {
    let selectedOp = event.target.firstChild.textContent;
    let equationArr = [`${this.state.firstArgument}`, `${this.state.operator}`, `${this.state.secondArgument}`];
    const evalArr = eval(equationArr.join(""));

    if (selectedOp === '=') {
      this.setState((prevState) => {
        return {
          ...prevState,
          firstArgument: evalArr,
          secondArgument: '',
          operator: '',
          result: evalArr
        }
      })
    } else
      this.setState((prevState) => {
        return {
          ...prevState,
          operator: selectedOp
        }
      })
  }

  inputChangeHandler = (event) => {
    let userInput = event.target.value

    this.setState((prevState) => {
      return {
        ...prevState,
        firstArgument: userInput
      }
    })
  }

  inputDisplay = () => {
    if (this.state.result) {
      return this.state.result
    } else if
      (this.state.secondArgument && this.state.firstArgument > 0) {
      return this.state.secondArgument
    } else return this.state.firstArgument
  }

  clickClearHandler = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        firstArgument: '',
        secondArgument: '',
        operator: '',
        result: '',
      }
    })
  }

  buttonStyle = {
    textAlign: 'center',
    margin: '2px',
    cursor: 'pointer'
  }

  render() {

    return (
      <React.Fragment>
        <div className='App'>
          <div className='Container'>
            <div>
              <input className='Display' type='text' value={this.inputDisplay()} onChange={this.inputChangeHandler}></input>
            </div>
            <div className='Button'>
              {this.state.numbers.map((number, index) => {
                return <Number number={number} key={index} click={this.clickNumberHandler} style={this.buttonStyle} />
              })}
              {this.state.operators.map((operator, index) => {
                return <Operator operator={operator} key={index} click={this.clickOperatorHandler} style={this.buttonStyle} />
              })}
              <button style={this.buttonStyle} onClick={this.clickClearHandler}>C</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
