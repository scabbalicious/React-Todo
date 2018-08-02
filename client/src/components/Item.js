import React, { Component } from 'react'
import {update, remove} from '../actions/actions'
import './Item.css'
import 'font-awesome/css/font-awesome.min.css'
import {greenComplete, redIncomplete} from '../actions/actions'

class Item extends Component {
	updateStatus = (e) => {
			if (this.props.status === 'incomplete') {
				update(this.props.id, 'complete')
				greenComplete()
			} else {
				update(this.props.id, 'incomplete')
				redIncomplete()
			}
		}

	removeTodo = (e) => {
		remove(this.props.id)
		}


 render() {
   return (
   	<div className="itemContainer">
     	<li id="list">{this.props.task} <span id="status">{this.props.status}</span></li>
			<button className="itemButton complete" onClick={this.updateStatus}><i className="fa fa-check fa-3x"></i></button>
			<button className="itemButton remove" onClick={this.removeTodo}><i className="fa fa-times fa-3x"></i></button>
     </div>
   )
 }
}

export default Item