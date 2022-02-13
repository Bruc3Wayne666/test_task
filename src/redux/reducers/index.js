import {combineReducers} from "redux";
import {todoReducer} from "./todoReducer";
import {pageReducer} from "./pageReducer";
import {loadingReducer} from "./loadingReducer";

export const rootReducer = combineReducers({
    todoReducer,
    pageReducer,
    loadingReducer
})