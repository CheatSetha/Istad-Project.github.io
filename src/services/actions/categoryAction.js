import { baseUrl } from "../../constant/BaseUrl"
import { actionTypes } from "./ActionTypes"

export const fetchCategory = () => {
    return(dispatch) => {
        const options={
            method: 'GET'
        }
        fetch(`${baseUrl}categories`,options)
        .then(res => res.json())
        .then(res => 
            dispatch({
                type: actionTypes.fetch_category,
                payload: res.data
            }))
    }
}