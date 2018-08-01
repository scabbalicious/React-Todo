import React, { Component } from 'react'
import axios from 'axios'
import './AddStuff.css'

class AddStuff extends Component {
	state = {
		task: '' 
	}

	handleChange = e => {
		this.setState({
			task: e.target.value
		})
	}

	handleSubmit = e => {
		e.preventDefault()
	

	const todo = {
		task: this.state.task
	}

	axios.post('http://localhost:3001/todos', {todo}).then(resp => {
		console.log(resp)
		console.log(resp.data)
	})
}

 render() {
   return (
   		<div className="addContainer">
   			<form onSubmit={this.handleSubmit}>
   				<label>
   					<span className="addText">Task:</span><input className="addField" type="text" name="task" onChange={this.handleChange} />
   				</label>
   				<button type="submit" className="addButton">Add</button>
   			</form>
     	</div>
   )
 }
}

export default AddStuff