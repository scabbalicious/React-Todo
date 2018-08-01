import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getStuff} from '../actions/actions'
import Item from './Item'


class List extends Component {
	
	componentDidMount() {
		getStuff()
	}

 render() {
   return (
   		<ul>
			{this.props.todos.map(todo => 
				<Item key={'todo' + todo.id} {...todo} />
			)}
		</ul>
     
   )
 }
}


function mapStateToProps(appState) {
	return {
		todos: appState.todos
	}
}
export default connect(mapStateToProps)(List)