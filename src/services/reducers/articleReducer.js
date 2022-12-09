import { actionTypes } from "../actions/ActionTypes"

const initialState = {
	articles: [],
	
}

export const articleReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.fetch_articles:
			return { ...state, articles: action.payload }
		case actionTypes.search_article:
			return {...state, articles: action.payload}	
		case actionTypes.delete_article:
			return {...state , articles: state.articles.filter(article => article.id !== action.payload)}
		case actionTypes.article_by_id:
			return{...state, articles: action.payload}
		case actionTypes.edit_article:
			return{...state , articles: action.payload}
			case actionTypes.get_4articles:
				return {...state, articles: action.payload}
		default:
			return state
	}
}


