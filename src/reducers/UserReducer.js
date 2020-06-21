import * as UserAction from "./action/UserAction"

const initialState = {
	name: null
}

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LOGIN':
			return action.user
			break;
		case 'LOGOUT':
			return null
		default:
			return state
			break;
	}
}

export default userReducer