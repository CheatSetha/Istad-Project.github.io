import { actionTypes } from "../actions/ActionTypes"

const initialState = {
	categories: [],
	
}

export  const categoryReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.fetch_category:
			return { ...state, articles: action.payload }

		default:
			return state
	}
}