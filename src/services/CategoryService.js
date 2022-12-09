import { baseUrl } from "../constant/BaseUrl"


class CategoryService {
    fetchCategory = () =>{
        return fetch(` ${baseUrl}categories` , { method: 'GET'})
    }
}
export default new CategoryService()

