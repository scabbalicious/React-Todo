import React, { Component } from 'react'
import List from './List'
import Form from './Form'
import './App.css'
import {Provider} from 'react-redux'
import store from '../services/store'

class App extends Component {
 render() {
   return (
   	<Provider store={store}>
   		<div className="grandeContainer">
   			<List />
   			<Form />
     	</div>
     </Provider>
   )
 }
}

export default App