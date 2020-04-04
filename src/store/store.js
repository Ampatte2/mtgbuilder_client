import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import main from "./reducers/main"



const store = createStore(main, applyMiddleware(thunk))

export default store