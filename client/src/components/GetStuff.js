import React, { Component } from 'react'
import axios from "axios"
import './GetStuff.css'

export default class ToDoList extends Component {
	state = {
		todos: []
	}

	componentDidMount() {
		axios.get('http://localhost:3001/todos').then(resp => {
			const todos = resp.data
			this.setState({ todos })
		})
	}

	render() {
		return (
			
		)
	}
}