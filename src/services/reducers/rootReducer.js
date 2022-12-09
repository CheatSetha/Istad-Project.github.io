import { articleReducer } from "./articleReducer";
import{combineReducers} from"redux";
import { categoryReducer } from "./categoryReducer";
import { tagReducer } from "./tagReducer";
export const rootReducer = combineReducers ({
    articleR: articleReducer,
    categoryR: categoryReducer,
    tagR: tagReducer,

 
})