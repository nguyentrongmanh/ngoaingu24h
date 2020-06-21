export const signin = (payload) => {
	return {
		type: 'LOGIN',
		user: payload
	}
}

export const logout = () => {
	return {
		type: 'LOGOUT',
	}
}