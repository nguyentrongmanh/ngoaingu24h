
const initialState = {
	name: null
}

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_QUESTIONS_LIST':
			return action.user
			break;
		case 'ADD_ANSWER_LIST':
			return null
		default:
			return state
			break;
	}
}

export default userReducer