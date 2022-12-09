import { baseUrl } from "../constant/BaseUrl"


class NewsService {

    fetchArticlesById= (id) => {
        return fetch(`${baseUrl}articles/${id}?populate=*`, { method: 'GET'})
    }
   
  
}
export default new NewsService ()