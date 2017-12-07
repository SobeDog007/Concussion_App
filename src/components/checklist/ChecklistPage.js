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

    		<div className="parentDiv">

	    		<div className="row">

	    			<div className="col-lg-6">

	      			<div className="checklistmain1">

			      		<h2>Signs & Symptoms</h2>
			      		
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

					      </ul>

			      	</div>
			      </div>

			      <div className="col-lg-6">

			      	<div className="checklistmain2">

			      		<h2>Do Not Miss Signs</h2>

					      <ul style={ulStyle} >

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

	        			</div>
	        		</div>
	        	</div>

	        	<div className="row">

	        		<input className="submit" type="submit" value="Calculate Results"
	          		onClick={() => this.submitData()}
	        		/>

	      	</div>
      	</div>
    	);
  	}
}
