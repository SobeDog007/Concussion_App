import React, {Component} from 'react';
import './HomePage.css';


export default class HomePage extends Component {

  	render(){
   	return (
    		<div>
      		<h1 className="container test">Home Page</h1>
      		<h3 className="container test two">What is "Head In The Game"?</h3>
        		<p>Head In The Game is an website devoted to helping parents/coaches easily and efficiently diagnose concusions or other sports related head trauma. 
We feel its valuable due to the increasing understanding of the seriousness of brain damage or potential brain damage related to contact sports. 
On a basic level this app would help parents or coaches to diagnose the injury to the athlete and take appropriate action.</p>
      		<h3 className="container test three">Concussion facts</h3>
        		<p>A concussion is a type of traumatic brain injury—or TBI—caused by a bump, blow, or jolt to the head or by a hit to the body that causes the head and brain to move rapidly back and forth.This sudden movement can cause the brain to bounce around or twist in the skull, creating chemical changes in the brain and sometimes stretching and damaging brain cells.</P>
        		<p>Signs and symptoms generally show up soon after the injury. However, you may not know how serious the injury is at first and some symptoms may not show up for hours or days. For example, in the first few minutes your child or teen might be a little confused or a bit dazed, but an hour later your child might not be able to remember how he or she got hurt.</p>
        		<p>Dangerous Signs & Symptoms of a Concussion</p>
          	<ul>
            	<li>One pupil larger than the other.</li>
            	<li>Drowsiness or inability to wake up.</li>
            	<li>A headache that gets worse and does not go away.</li>
            	<li>Slurred speech, weakness, numbness, or decreased coordination.</li>
            	<li>Repeated vomiting or nausea, convulsions or seizures (shaking or twitching).</li>
            	<li>Unusual behavior, increased confusion, restlessness, or agitation.</li>
            	<li>Loss of consciousness (passed out/knocked out). Even a brief loss of consciousness should be taken seriously.</li>
          	</ul>
    		</div>

   	);
  	}
}
