import { combineReducers } from "redux";
import { ListReducer } from "./ListReducer";

export const RootReducer = combineReducers({
    list: ListReducer
})