import React, { Component } from 'react';

function UserFeedback(props) {
  if(props.check){
    return <span>Correct!</span>
  } else {
    return <span>Incorrect</span>
  }
}

export default class IdentifyArithmeticSequence extends Component {
  constructor(props) {
    super(props)
    this.state = {
      commonDifference: 3,
      initialTerm: 2,
      nTerms: 5,
      userSolution: false,
      showFeedback: false
    } 
  }

  checkAnswer = () => {
    this.setState({
      showFeedback: true,
      userSolution: (document.getElementById("a").value === this.state.initialTerm.toString()) && (document.getElementById("d").value === this.state.commonDifference.toString())
    });
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
        a = <input id="a" type="number"></input>
        d = <input id="d" type="number"></input>
      </div>
      <div id="feedback">
        <button onClick={this.checkAnswer}>Check your answer!</button>
        { this.state.showFeedback ? <UserFeedback check={this.state.userSolution} /> : '' }
      </div>
      <div id="solution">
      </div>
      <button onClick={this.newQuestion}>Give me a new question!</button>
    </section>
    )
  }
}