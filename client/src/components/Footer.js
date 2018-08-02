import React, { Component } from 'react'
import './Footer.css'
import List from './List'

class Footer extends Component {
	state = {
		status: ''
	}

	// updateCompleted = (e) => {
	// 	if(this.props.status !== 'complete') {
	// 		document.getElementById('list').style.display="none";
	// 		document.getElementById('status').style.display="none";

	// 	}
	// }
 render() {
   return (
   		<div className="footContainer">
   			<span className="footCaption">{this.props.count} items remaining</span>
   			<button className="footButton">All</button>
   			<button className="footButton">Active Tasks</button>
   			<button className="footButton" onClick={this.updateCompleted}>Completed Tasks</button>
   		</div>
   )
 }
}

export default Footer