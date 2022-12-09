import { actionTypes } from "../actions/ActionTypes"

const initState = {
	tags: [],
}
export const tagReducer = (state = initState, action) => {
	switch (action.type) {
		case actionTypes.fetch_tags:
			return { ...state, tags: action.payload }
		default:
			return state
	}
}
