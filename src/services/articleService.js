import { baseUrl } from "../constant/BaseUrl"

class articleService {
    postArticles = (body) => {
        return fetch(`${baseUrl}articles` ,{
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
            'Content-Type': 'application/json',
             'accept': ' application/json' 
        }
        })

    }
    getArticleCategory = () => {
        return fetch(`${baseUrl}articles?populate=%2A`,{method:'GET'})
    }
   
  
}
export default new articleService