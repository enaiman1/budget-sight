import React, { Component } from 'react';
import  {Button, ClearButton}  from './Button/Button'
import Input  from './Input/Input'
import * as math from 'mathjs';
import "./Calculator.scss";


class Calculator extends Component{
 constructor(props){
  super(props);

  this.state = {
    input: "0"
  }
}  

addToInput = val => {
  this.setState({input: this.state.input + val});
}

handleEqual = () =>{
  this.setState({input: math.evaluate(this.state.input)})
}

render(){
  return (
    <div className="calculator">
      <div className="calculator__wrapper">
        <Input input={this.state.input}></Input>
      <div className="calculator__row">
      <Button handleClick={this.addToInput}>7</Button>
      <Button handleClick={this.addToInput}>8</Button>
      <Button handleClick={this.addToInput}>9</Button>
      <Button handleClick={this.addToInput}>/</Button>
      </div>
      <div className="calculator__row">
      <Button handleClick={this.addToInput}>4</Button>
      <Button handleClick={this.addToInput}>5</Button>
      <Button handleClick={this.addToInput}>6</Button>
      <Button handleClick={this.addToInput}>*</Button>
      </div>
      <div className="calculator__row">
      <Button handleClick={this.addToInput}>1</Button>
      <Button handleClick={this.addToInput}>2</Button>
      <Button handleClick={this.addToInput}>3</Button>
      <Button handleClick={this.addToInput}>+</Button>
      </div>
      <div className="calculator__row">
      <Button handleClick={this.addToInput}>.</Button>
      <Button handleClick={this.addToInput}>0</Button>
      <Button handleClick={()=> this.handleEqual()}>=</Button>
      <Button handleClick={this.addToInput}>-</Button>
      </div>
      <div className="calculator__row">
        <ClearButton handleClear={()=> this.setState({input: ""})}>Clear</ClearButton>
      </div>
      </div>
    </div>
  );
}
}

export default Calculator;
