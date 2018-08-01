import React, { Component } from 'react'
import actions from '../actions/actions'
import {addStuff} from '../actions/actions'
import './Form.css'

class Form extends Component {
	state = {
		task: ''
	}

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	
	handleSubmit = (e) => {
		e.preventDefault()
		addStuff(this.state.task)

	}

 render() {
   return (
   	<div className="add Container">
   			<form onSubmit={this.handleSubmit}>
   				<label>
   					<span className="addText">Task:</span><input className="addField" type="text" 
   							name="task" value={this.state.task} onChange={this.handleChange} />
   				</label>
   				<button type="submit" className="addButton">Add</button>
   			</form>
     	</div>
     
   )
 }
}

export default Form