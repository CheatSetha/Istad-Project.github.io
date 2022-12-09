import { baseUrl } from "../../constant/BaseUrl"
import { actionTypes } from "./ActionTypes"

export const fetchTags = () => {
	return (dispatch) => {
		const options = {
			method: "GET",
		}
		fetch(`${baseUrl}tags`, options)
			.then((res) => res.json())
			.then((res) => {
				dispatch({
					type: actionTypes.fetch_tags,
					payload: res.data,
				})
			})
	}
}
