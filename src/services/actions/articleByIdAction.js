// import { baseUrl } from "../../constant/BaseUrl"
// import { actionTypes } from "./ActionTypes"

// export const articleById = (id) => {
// 	return (dispatch) => {
// 		const options = {
// 			method: 'GET'
// 		}
// 		fetch(`${baseUrl}articles/${id}?populate=*`,options)
// 			.then((res) => res.json())
// 			.then((res) =>
// 				dispatch({
// 					type: actionTypes.delete_article,
// 					payload: res.data, 
// 				})
// 			)
// 	}
// }