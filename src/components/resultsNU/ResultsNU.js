import React, {Component} from 'react'

export default class ResultsNU extends Component{
  render(){
    return (
    <div className="container">
      <h1>Results</h1>
      <h4> Signs Experienced: </h4>
      <h4></h4>
      <h4> Symptoms Experienced: </h4>
      <h4></h4>

      <h1>Recommendations</h1>
      <h4>Remove child from play.</h4>
      <h4>Keep child out of play the full day of the injury and until cleared by a 
          healthcare provider.</h4>
      <h4>Record and share the information about the injury.</h4>
        <h5>When did it happen?</h5>
        <h5>How did it happen?</h5>
        <h5>Any symptoms?</h5>
      <h4>Ask the child's health care provider for written instructions about the steps needed
          to help the child return to school and play.</h4>
    </div>
    );
  }
}
