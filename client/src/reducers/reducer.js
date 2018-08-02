const initialState = {
	todos: []
}

export default function (state = initialState, action) {
	switch(action.type) {
		case 'GET_TODOS':
			return {...state, todos: action.payload}

		// case 'ADD_TODO':
		// 	return {...state, todos: [...state.todos, action.payload]}
		//not necessary since this adds directly to the list of todos. calling getStuff right after add will refresh the list

		default:
			return state
	}
}