import React, {Component} from 'react';
import './AdditionalPage.css';

export default class AdditionalPage extends Component{

  	render(){

    	return (
    		<div className="container mainbox2">

      		<h1 className="heading">Additional Resources</h1>

      		<h3><b>All information provided by this application respectfully sourced 
      		    from Heads Up CDC program.</b></h3>

      		<h3><b>Additional information, resources, materials, and training can be found at 
      		    their website.</b></h3>

		      <h3><a href="https://www.cdc.gov/HeadsUp" target="_blank">https://www.cdc.gov/HeadsUp</a></h3>

		      <h3><b>The National Alliance for Youth Sports Concussion Training</b></h3>

		      <h3><a href="https://nays.org/resources/more/free-concussion-training/" target="_blank">
		                  https://nays.org/resources/more/free-concussion-training/</a></h3>

		      <h3><b>Evidence-based sideline concussion screening offered in association with the Mayo Clinic</b></h3>

		      <h3><a href="https://kingdevicktest.com" target="_blank">https://kingdevicktest.com</a></h3>

		      <h3><b>Matthew Gfeller Sport-Related Traumatic Brain Injury Research Center at UNC-Chapel Hill</b></h3>

		      <h3><a href="http://tbicenter.unc.edu" target="_blank">tbicenter.unc.edu</a></h3>

		   </div>
    	);
  	}
}
