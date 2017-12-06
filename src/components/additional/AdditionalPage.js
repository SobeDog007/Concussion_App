import React, {Component} from 'react';
import './AdditionalPage.css';

export default class AdditionalPage extends Component{
  render(){
    return (
    <div className="container test">
      <h1 className="center">Additional Resources</h1>
      <h3>
      All information provided by this application respectfully sourced from Heads Up CDC program. 
      Additional information, resources, materials, and training can be found at their website.</h3>
      <h3>
      <a href="https://www.cdc.gov/HeadsUp" target="_blank">https://www.cdc.gov/HeadsUp</a>
      </h3>
      <h3>
      The National Alliance for Youth Sports Concussion Training</h3>
      <h3>
      <a href="https://nays.org/resources/more/free-concussion-training/" target="_blank">
                https://nays.org/resources/more/free-concussion-training/</a>
      </h3>
      <h3>
      Evidence-based sideline concussion screening offered in association with the Mayo Clinic</h3>
      <h3>
      <a href="https://kingdevicktest.com" target="_blank">https://kingdevicktest.com</a>
      </h3>
      <h3>
      Matthew Gfeller Sport-Related Traumatic Brain Injury Research Center at UNC-Chapel Hill</h3>
      <h3>
      <a href="http://tbicenter.unc.edu" target="_blank">tbicenter.unc.edu</a>
      </h3>
    </div>
    )
  }
}
