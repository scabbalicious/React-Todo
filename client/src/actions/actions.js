import store from '../services/store'
import axios from 'axios'

export function addStuff(task) {
	axios.post('http://localhost:3001/todos', {
		task: task,
		status: 'incomplete'
	}).then(resp => {
			getStuff()
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

export function greenComplete() {
	document.getElementById('status').style.backgroundColor="rgba(0,255,0,0.2)";
}
export function redIncomplete() {
	document.getElementById('status').style.backgroundColor="rgba(255,0,0,0.2)";
}