import React, { Component } from 'react';
import questions from './testQuestions';

export default class ChecklistPage extends React.Component {
  constructor() {
    super()
    this.state = {
      positiveRes: [],
      questions: questions
    }
  }

  changeInput = (e) => {

    console.log(e.target)
    console.log(e.target.name)
    let tempPositives = this.state.positiveRes
    tempPositives.push(e.target.name)
    this.setState({
      positiveRes: tempPositives
    })
  }

  submitData = () => {
    let answers = JSON.stringify(this.state.positiveRes)
    alert(`you have answered true on this question ${answers}`)
    // API call to Results non-urgent or Results urgent depending on what checkboxes are selected.
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.questions.signs.map((question, index) => {

            return (
              <li key={index}>
                <label htmlFor="checkBox1">{question}</label>
                <input
                  onChange={this.changeInput}
                  name={`signs-${index}`} type="checkbox" />
              </li>

            )
          })}

        </ul>
        <input type="submit" value="Submit"

          onClick={() => this.submitData()}

        />
      </div>
    );
  }
}

  /*
export default class ChecklistPage extends Component{
  render(){
    return (
    <div className="container">
      <h1>Checklist</h1>
      <p>
        This is the page that shows a checklist of signs, symptoms and do NOT miss symptoms.
      </p>
    </div>
    )
  }
} */