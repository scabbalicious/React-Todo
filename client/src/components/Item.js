import React, { Component } from 'react'
import {update, remove} from '../actions/actions'
import './Item.css'

class Item extends Component {
	updateStatus = (e) => {
			if (this.props.status === 'incomplete') {
				update(this.props.id, 'complete')
			} else {
				update(this.props.id, 'incomplete')
			}
		}

	removeTodo = (e) => {
		remove(this.props.id)
		}


 render() {
   return (
   	<div className="itemContainer">
     	<li>{this.props.task} - {this.props.status} </li>
			<button className="itemButton complete" onClick={this.updateStatus}>Complete</button>
			<button className="itemButton remove" onClick={this.removeTodo}>Remove</button>
     </div>
   )
 }
}

export default Item