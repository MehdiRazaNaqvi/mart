import { applyMiddleware, createStore } from "redux"
import state from "./reducer/reducer"
import thunk from "redux-thunk" 


const store = createStore(state , applyMiddleware(thunk));
export default store