import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import main from "./reducers/main"



const store = createStore(main, applyMiddleware(thunk, logger))

export default store