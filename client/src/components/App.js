import React, { Component } from 'react'
import List from './List'
import Form from './Form'
import './App.css'
import {Provider} from 'react-redux'
import store from '../services/store'
import Footer from './Footer'
import {getStuff} from '../actions/actions'

class App extends Component {

	componentDidMount() {
		getStuff()
	}

 render() {
   return (
   	<Provider store={store}>
   		<div className="grandeContainer">
   			<List />
   			<Form />
   			<Footer />
     	</div>
     </Provider>
   )
 }
}

export default App