import React, { Component } from 'react';

export default class IdentifyArithmeticSequence extends Component {
  constructor(props) {
    super(props)
    this.state = {
      commonDifference: 3,
      initialTerm: 2,
      nTerms: 5
    } 
  }

  checkAnswer = () => {

  }

  newQuestion = () => {
    const initialTerm = Math.floor(Math.random()*100);
    const commonDifference = Math.floor(Math.random()*100);
    const nTerms = Math.floor((Math.random()+3)*4);
    this.setState({initialTerm, commonDifference, nTerms});
  }

  render() {
    let sequenceArray = [this.state.initialTerm];
    for(let t = 0; t < this.state.nTerms-1; t++) {
      sequenceArray.push(sequenceArray[sequenceArray.length-1]+this.state.commonDifference);
    }
    return (
    <section>
      <div id="question">
        Determine the general equation of the following arithmetic sequence: {sequenceArray.join(', ')}
      </div>
      <div id="submitAnswer">
        a = <input type="number"></input>
        d = <input type="number"></input>
      </div>
      <div id="feedback">
      </div>
      <div id="solution">
      </div>
      <button onClick={this.checkAnswer}>Check your answer!</button>
      <button onClick={this.newQuestion}>Give me a new question!</button>
    </section>
    )
  }
}