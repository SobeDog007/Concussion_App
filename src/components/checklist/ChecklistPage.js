import React, { Component } from 'react';
import questions from './testQuestions';
import './ChecklistPage.css';

const ulStyle = {
  listStyleType: 'none',
  fontSize: '20px'
};

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
        <ul style={ulStyle} >
          {this.state.questions.signs.map((question, index) => {

            return (
              <li key={index}>
               
                <input
                  onChange={this.changeInput}
                  name={`signs-${index}`} type="checkbox" />
                  <label htmlFor="checkBox1">{question}</label>
              </li>

            )
          })}

          {this.state.questions.symptoms.map((question, index) => {

            return (
              <li key={index}>
               
                <input
                  onChange={this.changeInput}
                  name={`symptoms-${index}`} type="checkbox" />
                   <label htmlFor="checkBox1">{question}</label>
              </li>

            )
          })}

          {this.state.questions.doNotMiss.map((question, index) => {

            return (
              <li key={index}>
                
                <input
                  onChange={this.changeInput}
                  name={`doNotMiss-${index}`} type="checkbox" />
                  <label htmlFor="checkBox1">{question}</label>
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
