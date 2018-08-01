import store from '../services/store'
import axios from 'axios'

export function addStuff(task) {

	axios.post('http://localhost:3001/todos', {
		task: task,
		status: 'incomplete'
	}).then(resp => {
			store.dispatch({
				type: 'ADD_TODO',
				payload: resp.data
			})
	})
}

export function getStuff() {

	axios.get('http://localhost:3001/todos').then(resp => {
			store.dispatch({
				type: 'GET_TODOS',
				payload: resp.data
			})
	})
}

export function update(id, status) {
	axios.patch('http://localhost:3001/todos/' + id, {
		status: status
	}).then(resp => {
		getStuff()
	})
}

export function remove(id) {
	axios.delete('http://localhost:3001/todos/' + id).then(resp => {
		getStuff()
	})
}