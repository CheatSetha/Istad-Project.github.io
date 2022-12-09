import { baseUrl } from "../../constant/BaseUrl"
import { actionTypes } from "./ActionTypes"

export const fetchArticles = () => {
	return (dispatch) => {
		fetch(`${baseUrl}articles?populate=%2A`)
			.then((res) => res.json())
			.then((res) =>
				dispatch({
					type: actionTypes.fetch_articles,
					payload: res.data,
				})
			)
	}
}

export const get4Articles =() => {
	return(dispatch)=> {
		const options= {
			method: 'GET'
		}
		fetch(`${baseUrl}articles?pagination%5Blimit%5D=4&populate=%2A`,options)
		.then((res) => res.json())
			.then((res) =>
				dispatch({
					type: actionTypes.get_4articles,
					payload: res.data,
				})
			)
	}
}
export const deleteArticle = (id) => {
	return (dispatch) => {
		const options = {
			method: "DELETE",
		}
		fetch(`${baseUrl}articles/${id}`, options)
			.then((res) => res.json())
			.then((res) =>
				dispatch({
					type: actionTypes.delete_article,
					payload: id,
				})
			)
	}
}




