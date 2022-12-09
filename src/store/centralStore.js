
import { applyMiddleware, compose, legacy_createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { rootReducer } from "../services/reducers/rootReducer";

const middleWare = [thunk]
export const centralStore = legacy_createStore(
    rootReducer,

    compose(applyMiddleware(...middleWare), devToolsEnhancer({trace:true})),
   

)