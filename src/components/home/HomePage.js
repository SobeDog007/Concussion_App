import React, {Component} from 'react';
import './HomePage.css';


export default class HomePage extends Component {

  	render() {
   	return (
    		<div className="mainbox">
    			<div className="titlebox">

	      		<h1 className="heading">What is "Head In The Game"?</h1>
	        		
	        		<p>Head In The Game is a website devoted to helping parents and coaches more  
	        		   efficiently diagnose concussions and other sports related head trauma.  The goal 
	        		   of the application is to assist parents and coaches in determining the best 
	        		   course of action when an athlete suffers a head injury.  As the awareness and 
	        		   severity of potential brain damage continues to grow in today's sports climate,
	        		   the value of this application is to provide support and guidance.  It is not
	        		   It is not meant to replace professional medical care.</p>
      		</div>

      		<div className="factbox">

	      		<h2 className="heading">Concussion Facts</h2>
	        		
	        		<p>A concussion is a type of traumatic brain injury (TBI) caused by a bump, blow, or 
	        		   jolt to the head or by a hit to the body that causes the head and brain to move 
	        		   rapidly back and forth.  This sudden movement can cause the brain to bounce around 
	        		   or twist inside the skull, creating chemical changes in the brain and sometimes 
	        		   stretching and damaging brain cells.</p>

	        		<p>Signs and symptoms generally show up soon after the injury.  However, you may not 
	        		   know how serious the injury is at first and some symptoms may not show up for 
	        		   hours or days.  For example, in the first few minutes your child or teen might be 
	        		   a little confused or a bit dazed, but an hour later your child might not be able 
	        		   to remember how he or she got hurt.</p>
	        		
	        		<p>Dangerous Signs & Symptoms of a Concussion:</p>

	          	<ul>
	            	<li>One pupil larger than the other.</li>
	            	<li>Drowsiness or inability to wake up.</li>
	            	<li>A headache that gets worse and does not go away.</li>
	            	<li>Slurred speech, weakness, numbness, or decreased coordination.</li>
	            	<li>Repeated vomiting or nausea, convulsions or seizures (shaking or twitching).</li>
	            	<li>Unusual behavior, increased confusion, restlessness, or agitation.</li>
	            	<li>Loss of consciousness (passed out/knocked out).  Even a brief loss of 
	            	    consciousness should be taken seriously.</li>
	          	</ul>

          	</div>
    		</div>
   	);
  	}
}
